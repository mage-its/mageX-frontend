import { useQuery } from "@tanstack/react-query";
import apiClient from "./api-client";

export type Announcement = {
  id: string;
  valid: boolean;
  pengumuman: string;
  tanggal_awal: string;
  tanggal_akhir: string;
};

export const getAnnouncement = async (): Promise<Announcement[]> => {
  return apiClient
    .get("announcements")
    .then((res) => res.data.data)
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

export function useAnnouncement() {
  return useQuery({
    queryKey: ["announcement"],
    queryFn: () => getAnnouncement(),
    staleTime: 86400000,
  });
}
