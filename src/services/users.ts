import { useQuery } from "@tanstack/react-query";
import apiClient from "./api-client";

export interface Details {
  status: string;
  message: string;
  data: Data;
}

export interface Data {
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
}

export const getUserData = async (): Promise<Details> => {
  return apiClient
    .get("/users/details")
    .then((res) => res.data)
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
