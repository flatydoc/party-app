import { routes } from "@/core/configs/variables";
import { NextPage } from "next";

import classes from "./LearningPage.module.scss";
import { PrivateLink } from "@/modules/SignIn/components/ui/PrivateLink/PrivateLink";

const LearningPage: NextPage = () => {
  return (
    <>
      <h2 className={classes.title}>Bring your creative project to life.</h2>
      <PrivateLink to={routes.ADD_EVENT} text="Start a project" />
    </>
  );
};

export default LearningPage;
