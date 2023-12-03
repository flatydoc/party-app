"use client";
import { routes } from "@/core/configs/variables";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

import { FC, useRef } from "react";
import { Panel } from "./Panel/Panel";

export const Navigation: FC = () => {
  const session = useSession();
  const op = useRef(null);

  return (
    <nav>
      <Link href={routes.LEARNING}>Start a project</Link>
      {session?.data ? (
        <>
          <Image
            onClick={(e) => op.current?.toggle(e)}
            src={session.data?.user?.image}
            alt="user img"
            width={40}
            height={40}
          />
          <Panel op={op} session={session} signOut={signOut} />
        </>
      ) : (
        <Link href={routes.SIGN_IN}>Sign In</Link>
      )}
    </nav>
  );
};
