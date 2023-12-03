import classNames from "classnames";
import { FC } from "react";
import { Controller } from "react-hook-form";
import { IStepProps } from "../../core/types";
import { InputTextarea } from "primereact/inputtextarea";
import classes from "./Step.module.scss";

export const Step2: FC<IStepProps> = ({
  control,
  errors,
  getFormErrorMessage,
  handleNextStep,
  prevStep,
}) => {
  return (
    <div className={classes.step}>
      <p>add a description of your project</p>
      <Controller
        name="description"
        control={control}
        rules={{ required: "description is required." }}
        render={({ field, fieldState }) => (
          <>
            <label
              htmlFor={field.name}
              className={classNames({ "p-error": errors.value })}></label>
            <span className="p-float-label">
              <InputTextarea
                id={field.name}
                {...field}
                rows={4}
                cols={30}
                autoResize
                className={classNames({ "p-invalid": fieldState.error })}
              />
              <label htmlFor={field.name}>description</label>
            </span>
            {getFormErrorMessage(field.name)}
          </>
        )}
      />
      <div className={classes.btnWrapper}>
        <button className={classes.btn} onClick={prevStep}>
          Back
        </button>
        <button
          className={classes.btn}
          onClick={() => handleNextStep("description")}>
          Next
        </button>
      </div>
    </div>
  );
};
