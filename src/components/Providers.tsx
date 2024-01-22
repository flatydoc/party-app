"use client";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { store } from "../core/redux/store";
import React from "react";
import { WagmiConfig } from "wagmi";
import { wagmiConfig } from "@/core/configs/wagmi";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <WagmiConfig config={wagmiConfig}>
        <SessionProvider>{children}</SessionProvider>
      </WagmiConfig>
    </Provider>
  );
};
