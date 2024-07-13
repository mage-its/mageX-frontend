import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import apiClient from "./api-client";

export interface teams{
  id: string,
  anggota: string,
  nama: string,
  ketua: string,
  divisi: string,
  kategori: string,
  Bukti_pembayaran: string,
  status: string,
  Bukti_twibbon: string,
  invitation_code: string,
  link_video: string,
  link_proposal: string,
  link_karya: string,
}

const getUserTeams = async () => {
  return apiClient
    .get(`teams`)
    .then((res) => res)
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
