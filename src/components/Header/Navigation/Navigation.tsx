"use client";
import { routes } from "@/core/configs/variables";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

import { FC, useRef } from "react";
import { Panel } from "./Panel/Panel";
import { Avatar } from "primereact/avatar";
import { OverlayPanel } from "primereact/overlaypanel";

export const Navigation: FC = () => {
  const session = useSession();
  const op = useRef<OverlayPanel>(null);

  //  const userImage = session?.data?.user?.image ?? "../";
  //  const userNameInitial =
  //    session?.data?.user?.name?.charAt(0)?.toUpperCase() ?? "P";

  return (
    <nav>
      <Link href={routes.LEARNING}>Start a project</Link>
      {session?.data?.user ? (
        <>
          {session?.data.user?.image ? (
            <Image
              onClick={(e) => op.current?.toggle(e)}
              src={session.data?.user.image || "../"}
              alt="user img"
              width={40}
              height={40}
            />
          ) : (
            <Avatar
              onClick={(e) => op.current?.toggle(e)}
              label={session.data.user.name?.charAt(0).toUpperCase()}
              size="large"
              shape="circle"
            />
          )}
          <Panel op={op} session={session} signOut={signOut} />
        </>
      ) : (
        <Link href={routes.SIGN_IN}>Sign In</Link>
      )}
    </nav>
  );
};
