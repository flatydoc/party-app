import {
  Control,
  FieldErrors,
  UseFormHandleSubmit,
  UseFormWatch,
} from "react-hook-form";

export type LoginData = {
  email: string;
  password: string;
};

export interface ISignInFormProps {
  control: Control<LoginData>;
  handleSubmit: UseFormHandleSubmit<LoginData>;
  onSubmit: (data: LoginData) => Promise<void>;
  errors: FieldErrors<any>;
  getFormErrorMessage: (name: string) => JSX.Element | null;
  loading: boolean;
}
