"use client";
import Link from "next/link";

import { Button } from "primereact/button";
import classes from "./Sidebar.module.scss";
import classNames from "classnames";
import { routes } from "@/core/configs/variables";
import { Navigation } from "./Navigation/Navigation";

interface ISidebarProps {
  sidebarVisible: boolean;
  sidebarActiveHandler: () => void;
}

export const Sidebar = ({
  sidebarVisible,
  sidebarActiveHandler,
}: ISidebarProps) => {
  const navItems = [
    { label: "Discover", path: routes.EVENTS, icon: "pi pi-calendar" },
    { label: "Artists", path: routes.ARTISTS, icon: "pi pi-users" },
    {
      label: "Subscriptions",
      path: routes.SUBSCRIPTIONS,
      icon: "pi pi-users",
    },
    // ...(categories?.map((category) => ({
    //   label: category.name,
    //   href: `${routes.CATEGORIES}/${category.id}`,
    //   icon: category.icon || "pi pi-user",
    // })) || []),
  ];

  return (
    <div
      className={classNames(classes.sidebarWrapper, {
        [classes.active]: sidebarVisible,
      })}
      onClick={sidebarActiveHandler}>
      <aside className={classes.sidebar}>
        <div className={classes.header}>
          <Button
            onClick={sidebarActiveHandler}
            icon="pi pi-times"
            rounded
            size="large"
            text
            aria-label="Filter"
          />
          <Link href={routes.HOME}>Logo</Link>
        </div>
        <Navigation navLinks={navItems} />
      </aside>
    </div>
  );
};
