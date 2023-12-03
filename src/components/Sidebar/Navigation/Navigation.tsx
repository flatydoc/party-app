"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./Navigation.module.scss";

interface Navlink {
  href: string;
  label: string;
  icon: string;
}

interface NavProps {
  navLinks: Navlink[];
}

export const Navigation = ({ navLinks }: NavProps) => {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.label}>
              <Link
                href={link.href}
                className={classNames(classes.link, {
                  [classes.active]: isActive,
                })}>
                <i className={link.icon}></i>
                <p>{link.label}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
