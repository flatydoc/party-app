import { api } from "@/core/services";
import { NewUser } from "../types";

export const createNewUser = async (data: NewUser) => {
  try {
    return await api.post("/user/registration", data);
  } catch (error) {
    throw error;
  }
};
