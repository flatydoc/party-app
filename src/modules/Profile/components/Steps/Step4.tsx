import { FC } from "react";

import classes from "./Step.module.scss";
import { ILastStepProps } from "../../core/types";

export const Step4: FC<ILastStepProps> = ({ getValues, prevStep }) => {
  return (
    <div className={classes.step}>
      <h3>{getValues("title")}</h3>
      <p>{getValues("description")}</p>
      <p>{getValues("category").name}</p>
      <button className={classes.btn} onClick={prevStep}>
        Back
      </button>
      <button className={classes.btn} type="submit">
        confirm
      </button>
    </div>
  );
};
