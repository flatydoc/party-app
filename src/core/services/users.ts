import { IUser } from "../types";
import { api } from "./api.service";
import { authApi } from "./auth.service";

export const makeAuth = (data: IUser) => {
  return api.post("/user/login", data);
};

export const logout = () => {
  return authApi.post("/user/logout");
};
