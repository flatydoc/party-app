"use client";

import { routes } from "@/core/configs/variables";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FC } from "react";

interface IPrivateLinkProps {
  to: string;
  text: string;
}

export const PrivateLink: FC<IPrivateLinkProps> = ({ to, text }) => {
  const session = useSession();

  return <Link href={session?.data ? to : routes.SIGN_IN}>{text}</Link>;
};
