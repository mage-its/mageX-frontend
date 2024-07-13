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
  status: string;
}

export interface UpdateUser {
  nama?: string;
  institusi?: string;
  asal_provinsi?: string;
  alamat?: string;
  image_kartu?: File | null;
  tanggal_lahir?: string;
  no_hp?: string;
}

export const getUserData = async (): Promise<User> => {
  return apiClient
    .get("users/details")
    .then((res) => res.data.data)
    .catch((error) => {
      console.error("Error fetching data:", error);
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

  return apiClient
    .put("users/details", form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data)
    .catch((error) => {
      console.error("Error updating data:", error);
    });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["user"] }),
  });
};
