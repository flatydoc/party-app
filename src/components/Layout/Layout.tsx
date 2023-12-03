"use client";

import { FC, PropsWithChildren, useEffect, useState } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Sidebar } from "../Sidebar/Sidebar";
import classes from "./Layout.module.scss";

export const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const sidebarActiveHandler = () => {
    setSidebarVisible(!sidebarVisible);
  };

  useEffect(() => {
    document.body.style.overflow = sidebarVisible ? "hidden" : "unset";
  }, [sidebarVisible]);

  return (
    <div>
      <Header sidebarActiveHandler={sidebarActiveHandler} />
      <Sidebar
        sidebarVisible={sidebarVisible}
        sidebarActiveHandler={sidebarActiveHandler}
      />
      <main className={classes.main}>{children}</main>
      <Footer />
    </div>
  );
};
