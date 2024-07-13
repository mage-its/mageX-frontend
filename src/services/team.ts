import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import apiClient, { ResponseSchema } from "./api-client";

export interface Teams{
  id: string,
  anggota: string,
  nama: string,
  ketua: string,
  divisi: string,
  kategori: string,
  Bukti_pembayaran: string,
  status: string,
  Bukti_twibbon: string,
  link_video: string,
  link_proposal: string,
  link_karya: string,
}

export interface UpdateTeams {
  nama?: string,
  kategori?: string,
  link_video?: string,
  link_proposal?: string,
  link_karya?: string,
  Bukti_pembayaran?: string,
  Bukti_twibbon?: string,
}

export interface AddMembers {
  email: string
}

const getUserTeams = async () :Promise<Teams>=> {
  return apiClient
    .get(`teams/lead`)
    .then((res) => res.data.data)
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

export function useUserTeams() {
  return useQuery({
    queryKey: ["teams"],
    queryFn: () => getUserTeams(),
    staleTime: 86400000,
  });
}

export const updateTeamInformation = async (
  data: UpdateTeams
) :Promise<ResponseSchema<Teams>> => {
  const form = new FormData();
  data.nama && form.append("nama",data.nama);

  return apiClient
  .put("/teams", form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
  .then((res) => res.data)
  .catch((error) => {
    console.error("Error updating data:", error);
  });
}

export const useUpdateTeamInformation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateTeamInformation,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["team"] }),
  });
}

export const addMember = async(
  data:AddMembers
) :Promise<ResponseSchema<AddMembers>> => {
  const form = new FormData();
  data.email && form.append("email",data.email);

  return apiClient
    .put("/teams/add-members",form,{
      headers: {
        "Content-Type": "multipart/form-data",
      }
    })
    .then((res) => res.data)
    .catch((error) => {
      console.error("Error updating data:", error);
    });
}

export const useAddMember = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addMember,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["member"] }),
  });
}

export const createTeam = async (divisi: string) => {
  console.log("Creating team with divisi:", divisi);
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
