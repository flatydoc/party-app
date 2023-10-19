"use client";
import Link from "next/link";
import { Button } from "primereact/button";
import classes from "./Header.module.scss";
import { useEffect } from "react";

interface HeaderProps {
  sidebarVisible: boolean;
  sidebarActiveHandler: () => void;
}

export const Header = ({
  sidebarVisible,
  sidebarActiveHandler,
}: HeaderProps) => {
  
  useEffect(() => {
    document.body.style.overflow = sidebarVisible ? "hidden" : "unset";
  }, [sidebarVisible]);

  return (
    <header className={classes.header}>
      <Button
        onClick={sidebarActiveHandler}
        icon="pi pi-bars"
        rounded
        size="large"
        text
        aria-label="Filter"
      />
    </header>
  );
};
