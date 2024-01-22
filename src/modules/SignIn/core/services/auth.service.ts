import { api } from "@/core/services";
// import { IAuthData } from "../types";

export const makeAuth = async (data: Record<"email" | "password", string>) => {
  try {
    return await api.post("/user/login", data);
  } catch (error) {
    throw error;
  }
};
