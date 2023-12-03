"use client";

import { FC, useState } from "react";

import { FieldError, useForm } from "react-hook-form";

import { useRouter } from "next/navigation";
import { SignInForm } from "./components/SignInForm";
import { LoginData } from "./core/types";
import { routes } from "@/core/configs/variables";

export const SignIn: FC = () => {
  const defaultValues: LoginData = {
    email: "",
    password: "",
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<LoginData>({ defaultValues });

  const [loading, setLoading] = useState(false);

  const getFormErrorMessage = (name: string): JSX.Element | null => {
    const error = (errors as Record<string, FieldError>)[name];
    return error ? (
      <small className="p-error">{error.message}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };

  const router = useRouter();

  const onSubmit = async (data: LoginData) => {
    setLoading(true);
    try {
      console.log(data);
      setLoading(false);
      router.replace(routes.PROFILE);
    } catch (error) {
      setLoading(false);
      throw new Error("Failed to add event");
    }
  };

  return (
    <>
      <SignInForm
        control={control}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        getFormErrorMessage={getFormErrorMessage}
        loading={loading}
      />
    </>
  );
};
