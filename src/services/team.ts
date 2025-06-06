import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import apiClient, { ResponseSchema } from "./api-client";
import { User } from "./users";

export interface Teams {
  id: string;
  anggota: string[];
  username_ingame: string[];
  nama: string;
  ketua: string;
  divisi: string;
  kategori: string;
  bukti_pembayaran: string;
  status: string;
  bukti_twibbon_follow: string;
  link_video: string;
  proposal: string;
  link_karya: string;
}

export interface UpdateTeams {
  nama?: string;
  kategori?: string;
  link_video?: string;
  proposal?: File | null;
  link_karya?: string;
  bukti_pembayaran?: File | null;
  bukti_twibbon_follow?: File | null;
  username_ingame?: string[];
}

export interface verifyTeam {
  id: string;
  status: string;
}

export interface AddMembers {
  email: string[];
}

const getLeadTeams = async (): Promise<Teams> => {
  return apiClient
    .get(`teams/lead`)
    .then((res) => res.data.data)
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

export function useLeadTeams() {
  return useQuery({
    queryKey: ["teams"],
    queryFn: () => getLeadTeams(),
    staleTime: 86400000,
  });
}

export const updateTeamInformation = async (
  data: UpdateTeams
): Promise<ResponseSchema<Teams>> => {
  const form = new FormData();
  data.nama && form.append("nama", data.nama);
  data.kategori && form.append("kategori", data.kategori);
  data.link_video && form.append("link_video", data.link_video);
  data.proposal && form.append("proposal", data.proposal);
  data.link_karya && form.append("link_karya", data.link_karya);
  data.bukti_twibbon_follow &&
    form.append("bukti_twibbon_follow", data.bukti_twibbon_follow);
  data.bukti_pembayaran &&
    form.append("bukti_pembayaran", data.bukti_pembayaran);
  data.username_ingame &&
    data.username_ingame.forEach((username) => {
      form.append("username_ingame[]", username);
    });
  return apiClient
    .put("/teams", form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data)
    .catch((error) => {
      console.error("Error updating data:", error);
      return error.response.data;
    });
};

export const useUpdateTeamInformation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateTeamInformation,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["teams"] }),
  });
};

export const addMember = async (
  data: AddMembers
): Promise<ResponseSchema<AddMembers>> => {
  return apiClient
    .put("/teams/lead/members", {
      email: data.email,
    })
    .then((res) => res.data)
    .catch((error) => {
      console.error("Error updating data:", error);
    });
};

export const useAddMember = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addMember,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["members"] });
      queryClient.invalidateQueries({ queryKey: ["teams"] });
    },
  });
};

export const createTeam = async (divisi: string) => {
  // console.log("Creating team with divisi:", divisi);
  // const form = new FormData();
  // form.append("divisi", divisi);
  return apiClient
    .post(`teams`, { divisi })
    .then((res) => res)
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

export const useCreateTeam = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createTeam,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["teams"] }),
  });
};

export const getTeamMembers = async (): Promise<User[]> => {
  return apiClient
    .get(`teams/lead/members`)
    .then((res) => res.data.data.anggota)
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

export function useTeamMembers() {
  return useQuery({
    queryKey: ["members"],
    queryFn: () => getTeamMembers(),
    staleTime: 86400000,
  });
}

export const getUserTeam = async (): Promise<Teams[]> => {
  return apiClient
    .get(`teams`)
    .then((res) => res.data.data)
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

export function useUserTeam() {
  return useQuery({
    queryKey: ["userTeams"],
    queryFn: () => getUserTeam(),
    staleTime: 86400000,
  });
}

export const getAllTeams = async (search: string): Promise<Teams[]> => {
  return apiClient
    .get(`admin/teams?search=${search}`)
    .then((res) => res.data.data)
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

export function useAllTeams(search: string) {
  return useQuery({
    queryKey: ["allTeams", search],
    queryFn: () => getAllTeams(search),
    staleTime: 86400000,
  });
}

export const verifyTeam = async (req: verifyTeam) => {
  const form = new FormData();
  form.append("status", req.status);
  return apiClient
    .put(`teams/${req.id}/verify`, form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data)
    .catch((error) => {
      console.error("Error fetching data:", error);
      return error.response.data;
    });
};

export const useVerifyTeam = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: verifyTeam,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["allTeams"] }),
  });
};

export const getTeamMembersById = async (id: string): Promise<User[]> => {
  return apiClient
    .get(`teams/${id}/members`)
    .then((res) => res.data.data)
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

export function useTeamMembersById(id: string) {
  return useQuery({
    queryKey: ["members", id],
    queryFn: () => getTeamMembersById(id),
    staleTime: 86400000,
  });
}
