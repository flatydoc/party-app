"use client";

import { FC, PropsWithChildren, useState } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Sidebar } from "../Sidebar/Sidebar";

export const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const sidebarActiveHandler = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div>
      <Header
        sidebarVisible={sidebarVisible}
        sidebarActiveHandler={sidebarActiveHandler}
      />
      <Sidebar
        sidebarVisible={sidebarVisible}
        sidebarActiveHandler={sidebarActiveHandler}
      />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
