"use client";

import { FC, useState } from "react";

import { FieldError, useForm } from "react-hook-form";

import { useRouter } from "next/navigation";
import { SignUpForm } from "./components/SignUpForm";
import { NewUser } from "./core/types";
import { routes } from "@/core/configs/variables";

export const SignUp: FC = () => {
  const defaultValues: NewUser = {
    name: "",
    email: "",
    password: "",
    repeatedPassword: "",
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<NewUser>({ defaultValues });

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

  const onSubmit = async (data: NewUser) => {
    setLoading(true);
    try {
      console.log(data);
      setLoading(false);
      router.replace(routes.PROFILE);
    } catch (error) {
      throw new Error("Failed to add event");
      setLoading(false);
    }
  };

  return (
    <>
      <SignUpForm
        control={control}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        getFormErrorMessage={getFormErrorMessage}
        watch={watch}
        loading={loading}
      />
    </>
  );
};
