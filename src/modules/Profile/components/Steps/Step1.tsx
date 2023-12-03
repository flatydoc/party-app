import classNames from "classnames";
import { InputText } from "primereact/inputtext";
import { FC } from "react";
import { Controller } from "react-hook-form";
import { IStepProps } from "../../core/types";
import classes from "./Step.module.scss";

type FirstStepProps = Omit<IStepProps, "prevStep">;

export const Step1: FC<FirstStepProps> = ({
  control,
  errors,
  getFormErrorMessage,
  handleNextStep,
}) => {
  return (
    <div className={classes.step}>
      <h3>First, let’s get you set up.</h3>
      <p>name your project</p>
      <Controller
        name="title"
        control={control}
        rules={{ required: "Title is required." }}
        render={({ field, fieldState }) => (
          <>
            <label
              htmlFor={field.name}
              className={classNames({ "p-error": errors.value })}></label>
            <span className="p-float-label">
              <InputText
                id={field.name}
                value={field.value}
                className={classNames({ "p-invalid": fieldState.error })}
                onChange={(e) => field.onChange(e.target.value)}
              />
              <label htmlFor={field.name}>title</label>
            </span>
            {getFormErrorMessage(field.name)}
          </>
        )}
      />
      <button className={classes.btn} onClick={() => handleNextStep("title")}>
        Next
      </button>
    </div>
  );
};
