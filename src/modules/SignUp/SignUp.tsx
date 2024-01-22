"use client";

import { FC, useState } from "react";

import { FieldError, useForm } from "react-hook-form";

import { useRouter } from "next/navigation";
import { SignUpForm } from "./components/SignUpForm";
import { NewUser } from "./core/types";
import { routes } from "@/core/configs/variables";
import { createNewUser } from "./core/services/registration.service";
import { signIn } from "next-auth/react";
import Link from "next/link";

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
      const res = await createNewUser(data);
      if (res && res.status === 201) {
        await signIn("credentials", {
          email: res.data.data.user.email,
          password: data.password,
          redirect: false,
        });
        router.replace(routes.PROFILE);
      } else {
        throw new Error("Failed to auth");
      }
    } catch (error) {
      throw new Error("Failed to registration");
    } finally {
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
      <Link href={routes.SIGN_IN}>Sign In</Link>
    </>
  );
};
