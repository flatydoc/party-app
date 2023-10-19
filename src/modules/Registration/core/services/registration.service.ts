import { api } from "@/core/services/api.service";
import { INewUser } from "../types/form.types";

export const createNewUser = (data: INewUser) => {
  return api.post<INewUser>("/user/registration", data);
};
