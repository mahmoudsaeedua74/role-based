import axiosInstance from "./axiosInstance";

// this for  login user's with the authentication
export const login = (email, password) => {
  return axiosInstance.post("/login", { email, password });
};
