import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import apiClient, { ResponseSchema } from "./api-client";

// export interface Details {
//   status: string;
//   message: string;
//   data: Data;
// }

export interface User {
  id: string;
  openid: string;
  nama: string;
  email: string;
  institusi: string;
  asal_provinsi: string;
  alamat: string;
  image_kartu: string;
  tanggal_lahir: string;
  no_hp: string;
  verified: string;
  username_ig: string;
  is_logged_in: true;
}

export type UserLoggedOut = {
  is_logged_in: false;
};

export interface UpdateUser {
  nama?: string;
  institusi?: string;
  asal_provinsi?: string;
  alamat?: string;
  image_kartu?: File | null;
  tanggal_lahir?: string;
  no_hp?: string;
  username_ig?: string;
}

export const getUserData = async (): Promise<User> => {
  return apiClient
    .get("users/details")
    .then((res) => ({ is_logged_in: true, ...res.data.data }))
    .catch((error) => {
      if (error.response.data.message === "Invalid session") {
        window.location.href = "/";
      }
      return { is_logged_in: false };
    });
};

export function useUserData() {
  return useQuery({
    queryKey: ["user"],
    queryFn: () => getUserData(),
    staleTime: 86400000,
  });
}

export const updateUser = async (
  data: UpdateUser
): Promise<ResponseSchema<User>> => {
  const form = new FormData();
  data.nama && form.append("nama", data.nama);
  data.tanggal_lahir && form.append("tanggal_lahir", data.tanggal_lahir);
  data.no_hp && form.append("no_hp", data.no_hp);
  data.institusi && form.append("institusi", data.institusi);
  data.asal_provinsi && form.append("asal_provinsi", data.asal_provinsi);
  data.alamat && form.append("alamat", data.alamat);
  data.image_kartu && form.append("img_kartu", data.image_kartu);
  data.username_ig && form.append("username_ig", data.username_ig);

  return apiClient
    .put("users/details", form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data)
    .catch((error) => {
      if (error.response.data.message === "Invalid session") {
        window.location.href = "/";
      }
      console.error("Error updating data:", error);
      return error.response.data;
    });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["user"] }),
  });
};

export const logout = async (): Promise<void> => {
  return apiClient
    .put("users/logout")
    .then(() => {
      window.location.reload();
    })
    .catch((error) => {
      if (error.response.data.message === "Invalid session") {
        window.location.href = "/";
      }
      console.error("Error logging out:", error);
    });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};

export const getAllUsers = async (search: string): Promise<User[]> => {
  // console.log(search);
  return apiClient
    .get(`users?search=${search}`)
    .then((res) => res.data.data)
    .catch((error) => {
      if (error.response.data.message === "Invalid session") {
        window.location.href = "/";
      }
      console.error("Error fetching data:", error);
    });
};

export const useGetAllUsers = (search: string) => {
  // console.log(search);
  return useQuery({
    queryKey: ["users", search],
    queryFn: () => getAllUsers(search),
    staleTime: 86400000,
  });
};

export const verifyUser = async (
  userId: string
): Promise<ResponseSchema<void>> => {
  return apiClient
    .put(`users/${userId}/verify?verified=true`)
    .then((res) => res.data)
    .catch((error) => {
      if (error.response.data.message === "Invalid session") {
        window.location.href = "/";
      }
      console.error("Error fetching data:", error);
      return error.response.data;
    });
};

export const useVerifyUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: verifyUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });
};
