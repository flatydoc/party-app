"use client";

import { FC, useState } from "react";

import { FieldError, useForm } from "react-hook-form";

import { useRouter } from "next/navigation";
import { SignInForm } from "./components/SignInForm";
import { LoginData } from "./core/types";
import { routes } from "@/core/configs/variables";
import { GoogleButton } from "@/modules/SignIn/components/ui/GoogleButton/GoogleButton";
import { signIn } from "next-auth/react";
import Link from "next/link";

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
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      if (res && !res.error) {
        router.replace(routes.PROFILE);
      } else {
        throw new Error("Failed to auth");
      }
    } catch (error) {
      throw new Error("Failed to auth");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <GoogleButton />
      <SignInForm
        control={control}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        getFormErrorMessage={getFormErrorMessage}
        loading={loading}
      />
      <Link href={routes.SIGN_UP}>Sign Up</Link>
    </>
  );
};
