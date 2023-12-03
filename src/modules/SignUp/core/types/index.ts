import { IUser } from "@/core/types";
import {
  Control,
  FieldErrors,
  UseFormHandleSubmit,
  UseFormWatch,
} from "react-hook-form";

export type NewUser = Omit<IUser, "id" | "isAdmin" | "isActivated"> & {
  password: string;
  repeatedPassword: string;
};

export interface ISignUpFormProps {
  control: Control<NewUser>;
  handleSubmit: UseFormHandleSubmit<NewUser>;
  onSubmit: (data: NewUser) => Promise<void>;
  errors: FieldErrors<any>;
  getFormErrorMessage: (name: string) => JSX.Element | null;
  watch: UseFormWatch<NewUser>;
  loading: boolean;
}
