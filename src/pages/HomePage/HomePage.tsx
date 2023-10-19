import Image from "next/image";
import classes from "./HomePage.module.scss";
import { Layout } from "@/components/Layout/Layout";

export const HomePage = () => {
  return (
    <Layout>
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
    </Layout>
  );
};
