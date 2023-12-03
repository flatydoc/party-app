import { Button } from "primereact/button";
import classes from "./Header.module.scss";
import { Navigation } from "./Navigation/Navigation";

interface HeaderProps {
  sidebarActiveHandler: () => void;
}

export const Header = ({ sidebarActiveHandler }: HeaderProps) => {
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
      <Navigation />
    </header>
  );
};
