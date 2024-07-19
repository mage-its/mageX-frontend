import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import apiClient from "./api-client";

export type RegisterWorkshop = {
  bukti_pembayaran: File;
  bukti_follow: File;
  sumber_informasi: string;
  workshop: string;
};

export type Workshop = {
  id: string;
  bukti_pembayaran: string;
  bukti_follow: string;
  sumber_informasi: string;
  workshop: string;
};

export const registerWorkshop = async (req: RegisterWorkshop) => {
  const form = new FormData();
  form.append("bukti_pembayaran", req.bukti_pembayaran);
  form.append("bukti_follow", req.bukti_follow);
  form.append("sumber_informasi", req.sumber_informasi);
  form.append("workshop", req.workshop);
  console.log(form.getAll("sumber_informasi"));
  return apiClient
    .post(`/workshop/register`, form, {
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
