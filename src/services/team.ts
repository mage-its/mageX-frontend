import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import apiClient from "./api-client";

const getUserTeams = async () => {
  return apiClient
    .get(`teams/details`)
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
