import { routes } from "@/core/configs/variables";
import Link from "next/link";
import { OverlayPanel } from "primereact/overlaypanel";

export const Panel = ({ op, session, signOut }) => {
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
