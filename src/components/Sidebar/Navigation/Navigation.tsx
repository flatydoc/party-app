"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./Navigation.module.scss";

interface INavlink {
  path: string;
  label: string;
  icon: string;
}

interface INavProps {
  navLinks: INavlink[];
}

export const Navigation = ({ navLinks }: INavProps) => {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        {navLinks.map(({ path, label, icon }) => {
          const isActive = pathname === path;
          return (
            <li key={label}>
              <Link
                href={path}
                className={classNames(classes.link, {
                  [classes.active]: isActive,
                })}>
                <i className={icon}></i>
                <p>{label}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
