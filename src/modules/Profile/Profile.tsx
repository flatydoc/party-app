"use client";
import { routes } from "@/core/configs/variables";
import Link from "next/link";
import { FC } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

interface IProfileProps {
  session: {
    user: {
      name: string;
    };
  };
}

export const Profile: FC<IProfileProps> = ({ session }) => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  return (
    <>
      {isConnected ? (
        <div>
          Connected to {address}
          <button onClick={() => disconnect()}>Disconnect</button>
        </div>
      ) : (
        <button onClick={() => connect()}>Connect Wallet</button>
      )}
      <h2>{session?.user?.name}</h2>
      <Link href={routes.MY_EVENTS}>My Events</Link>
    </>
  );
};
