import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import apiClient, { ResponseSchema } from "./api-client";

export type Announcement = {
  id: string;
  valid: boolean;
  pengumuman: string;
  tanggal_awal: string;
  tanggal_akhir: string;
};

export type AddAnnouncement = {
  pengumuman: string;
  tanggal_awal: string;
  tanggal_akhir: string;
};

export type UpdateAnnouncement = {
  id: string;
  pengumuman: string;
  tanggal_awal: string;
  tanggal_akhir: string;
};

export const getAnnouncement = async (): Promise<Announcement[]> => {
  return apiClient
    .get("announcements")
    .then((res) => res.data.data)
    .catch((error) => {
      if (error.response.data.message === "Invalid session") {
        window.location.href = "/";
      }
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

export const deleteAnnouncement = async (
  id: string
): Promise<ResponseSchema<void>> => {
  return apiClient
    .delete(`announcements/${id}`)
    .then((res) => res.data)
    .catch((error) => {
      if (error.response.data.message === "Invalid session") {
        window.location.href = "/";
      }
      console.error("Error deleting data:", error);
      return error.response.data;
    });
};

export const useDeleteAnnouncement = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteAnnouncement,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["announcement"] }),
  });
};

export const addAnnouncement = async (
  announcement: AddAnnouncement
): Promise<ResponseSchema<void>> => {
  const form = new FormData();
  form.append("pengumuman", announcement.pengumuman);
  form.append("tanggal_awal", announcement.tanggal_awal);
  form.append("tanggal_akhir", announcement.tanggal_akhir);
  return apiClient
    .post("announcements", form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data)
    .catch((error) => {
      if (error.response.data.message === "Invalid session") {
        window.location.href = "/";
      }
      console.error("Error adding data:", error);
      return error.response.data;
    });
};

export const useAddAnnouncement = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addAnnouncement,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["announcement"] }),
  });
};

export const updateAnnouncement = async (
  announcement: UpdateAnnouncement
): Promise<ResponseSchema<void>> => {
  const form = new FormData();
  form.append("pengumuman", announcement.pengumuman);
  form.append("tanggal_awal", announcement.tanggal_awal);
  form.append("tanggal_akhir", announcement.tanggal_akhir);
  // console.log(announcement.id);
  return apiClient
    .put(`announcements/${announcement.id}`, form, {
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

export const useUpdateAnnouncement = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateAnnouncement,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["announcement"] }),
  });
};
