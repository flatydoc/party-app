"use client";

import { routes } from "@/core/configs/variables";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FC } from "react";
import classes from "./GoogleButton.module.scss";

export const GoogleButton: FC = () => {
  const searchParams = useSearchParams();
  let callbackUrl = routes.PROFILE;

  if (searchParams) {
    callbackUrl = searchParams.get("callbackUrl") || routes.PROFILE;
  }

  return (
    <button
      className={classes.btn}
      onClick={() => signIn("google", { callbackUrl })}>
      Sig In with Google
    </button>
  );
};
