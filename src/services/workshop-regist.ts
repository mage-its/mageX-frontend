import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import apiClient from "./api-client";

export type Workshop = {
  id: string;
  bukti_pembayaran: string;
  bukti_follow: string;
  sumber_informasi: string;
  "workshop-registration": string;
  verified: string;
};

export type updateWorkshop = {
  bukti_pembayaran: File;
  bukti_follow: File;
  sumber_informasi: string;
  "workshop-registration": string;
};

export const registerWorkshop = async (workshop: string) => {
  const form = new FormData();
  form.append("workshop", workshop);
  return apiClient
    .post(`/workshop/register-min`, form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data)
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

export const useRegisterWorkshop = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: registerWorkshop,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["workshops"] }),
  });
};

export const getWorkshops = async (): Promise<Workshop[]> => {
  return apiClient
    .get("/workshop/user")
    .then((res) => res.data.data)
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

export const useGetWorkshops = () => {
  return useQuery({
    queryKey: ["workshops"],
    queryFn: getWorkshops,
  });
};

export const updateWorkshop = async (workshop: updateWorkshop) => {
  const form = new FormData();
  form.append("bukti_pembayaran", workshop.bukti_pembayaran);
  form.append("bukti_follow", workshop.bukti_follow);
  form.append("sumber_informasi", workshop.sumber_informasi);
  console.log(workshop);
  return apiClient
    .put(`/workshop/Multimedia`, form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data)
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

export const useUpdateWorkshop = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateWorkshop,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["workshops"] }),
  });
};
