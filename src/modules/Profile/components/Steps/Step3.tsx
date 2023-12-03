import classNames from "classnames";
import { FC } from "react";
import { Controller } from "react-hook-form";
import { IStepProps } from "../../core/types";
import { Dropdown } from "primereact/dropdown";
import classes from "./Step.module.scss";

export const Step3: FC<IStepProps> = ({
  control,
  errors,
  getFormErrorMessage,
  handleNextStep,
  prevStep,
  categories,
}) => {
  return (
    <div className={classes.step}>
      <h3>Last one — select a primary category for your new project.</h3>
      <p>
        This will help funders find your project, and you can change it later.
        If you need.
      </p>
      <Controller
        name="category"
        control={control}
        rules={{
          validate: (value) => value.id !== 0 || "category is required",
        }}
        render={({ field, fieldState }) => (
          <>
            <label
              htmlFor={field.name}
              className={classNames({ "p-error": errors.value })}></label>
            <span className="p-float-label">
              <Dropdown
                id={field.name}
                value={field.value}
                optionLabel="name"
                placeholder="Select a category"
                options={categories}
                focusInputRef={field.ref}
                onChange={(e) => field.onChange(e.value)}
                className={classNames({ "p-invalid": fieldState.error })}
              />
              <label htmlFor={field.name}>category</label>
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
          onClick={() => handleNextStep("category")}>
          continue
        </button>
      </div>
    </div>
  );
};
