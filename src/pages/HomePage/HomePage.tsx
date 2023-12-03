import Image from "next/image";
import classes from "./HomePage.module.scss";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <div>
      <Image
        className={classes.logo}
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </div>
  );
};
export default HomePage;
