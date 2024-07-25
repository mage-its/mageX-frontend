import { useQuery } from "@tanstack/react-query";
import apiClient from "./api-client";

export const getImage = async (id: string): Promise<string> => {
  return apiClient
    .get(`images/${id}`)
    .then((res) => res.data)
    .catch((error) => {
      if (error.response.data.message === "Invalid session") {
        window.location.href = "/";
      }
      console.error("Error fetching image:", error);
    });
};

export const useGetImage = (id: string) => {
  return useQuery({
    queryKey: ["image", id],
    queryFn: () => getImage(id),
    staleTime: 86400000,
  });
};
