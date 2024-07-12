import axios from "axios";

// Dummy API for Testing https://dummyjson.com/c/73bf-d653-4153-a517
// Mage API https://api.mage-its.id/users/details

export type SuccessResponseSchema<T> = {
  status: "success";
  message: string;
  data: T;
};

export type ErrorResponseSchema<T> = {
  status: "error";
  message: { error: string };
  data: T;
};

export type ResponseSchema<T> =
  | SuccessResponseSchema<T>
  | ErrorResponseSchema<T>;

const apiClient = axios.create({
  baseURL: "https://api.mage-its.id",
  withCredentials: true,
  // baseURL: "https://dummyjson.com/c/73bf-d653-4153-a517",
});

export default apiClient;
