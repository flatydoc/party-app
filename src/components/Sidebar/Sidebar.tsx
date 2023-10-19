"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";

import { Button } from "primereact/button";
import styles from "./Sidebar.module.scss";
import classNames from "classnames";

interface SidebarProps {
  sidebarVisible: boolean;
  sidebarActiveHandler: () => void;
}

export const Sidebar = ({
  sidebarVisible,
  sidebarActiveHandler,
}: SidebarProps) => {
  const router = useRouter();
  const items: MenuItem[] = [
    {
      label: "Events",
      icon: "pi pi-calendar",
      command: () => router.push(`/events`),
    },
    {
      label: "Artists",
      icon: "pi pi-users",
      command: () => router.push(`/artists`),
    },
    {
      label: "My subscriptions",
      icon: "pi pi-users",
      command: () => router.push(`/subscriptions`),
    },
  ];

  return (
    <div
      className={classNames(styles.sidebarWrapper, {
        [styles.active]: sidebarVisible,
      })}
      onClick={sidebarActiveHandler}>
      <aside className={styles.sidebar}>
        <div className={styles.header}>
          <Button
            onClick={sidebarActiveHandler}
            icon="pi pi-times"
            rounded
            size="large"
            text
            aria-label="Filter"
          />
          <Link href="/">Logo</Link>
        </div>
        <Menu model={items} />
      </aside>
    </div>
  );
};
