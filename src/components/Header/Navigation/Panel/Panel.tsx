import { routes } from "@/core/configs/variables";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { OverlayPanel } from "primereact/overlaypanel";
import { FC } from "react";

interface IPanelProps {
  op: React.RefObject<OverlayPanel>;
  session: ReturnType<typeof useSession>;
  signOut: typeof signOut;
}

export const Panel: FC<IPanelProps> = ({ op, session, signOut }) => {
  return (
    <OverlayPanel ref={op}>
      <p>{session.data?.user?.name}</p>
      <Link href={routes.PROFILE}>YOUR ACCOUNT</Link>
      <button
        onClick={() =>
          signOut({
            callbackUrl: routes.HOME,
          })
        }>
        Sign out
      </button>
    </OverlayPanel>
  );
};
