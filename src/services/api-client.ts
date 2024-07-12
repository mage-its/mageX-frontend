import axios from "axios";

// Dummy API for Testing https://dummyjson.com/c/73bf-d653-4153-a517
// Mage API https://api.mage-its.id/users/details

const apiClient = axios.create({
  baseURL: "https://dummyjson.com/c/73bf-d653-4153-a517",
});

export default apiClient