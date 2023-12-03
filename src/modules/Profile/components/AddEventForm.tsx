"use client";
import { FC, useState } from "react";

import { IEventFormProps } from "../core/types";
import { Step1 } from "./Steps/Step1";
import { Step2 } from "./Steps/Step2";
import { Step3 } from "./Steps/Step3";
import classes from "./AddEventForm.module.scss";
import { Step4 } from "./Steps/Step4";
import { useStepNavigation } from "../core/hooks/useStepNavigation";
import { Steps } from "primereact/steps";
import { MenuItem } from "primereact/menuitem";

export const AddEventForm: FC<IEventFormProps> = ({
  control,
  handleSubmit,
  onSubmit,
  getFormErrorMessage,
  errors,
  trigger,
  categories,
  getValues,
}) => {
  const steps: MenuItem[] = [
    {
      label: "title",
    },
    {
      label: "description",
    },
    {
      label: "category",
    },
    {
      label: "confirmation",
    },
  ];

  const { currentStep, nextStep, prevStep } = useStepNavigation(
    1,
    steps.length
  );

  const handleNextStep = async (fieldName: string) => {
    const isInputValid = await trigger(fieldName);
    if (isInputValid) {
      nextStep();
    }
  };

  return (
    <div className={classes.formWrapper}>
      {/* <p className={classes.stepNumber}>
        {currentStep} of {steps.length}
      </p> */}
      <Steps activeIndex={currentStep - 1} model={steps} />
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        {currentStep === 1 && (
          <Step1
            control={control}
            errors={errors}
            getFormErrorMessage={getFormErrorMessage}
            handleNextStep={handleNextStep}
          />
        )}

        {currentStep === 2 && (
          <Step2
            control={control}
            errors={errors}
            getFormErrorMessage={getFormErrorMessage}
            handleNextStep={handleNextStep}
            prevStep={prevStep}
          />
        )}

        {currentStep === 3 && (
          <Step3
            control={control}
            errors={errors}
            getFormErrorMessage={getFormErrorMessage}
            handleNextStep={handleNextStep}
            prevStep={prevStep}
            categories={categories}
          />
        )}

        {currentStep === 4 && (
          <Step4 getValues={getValues} prevStep={prevStep} />
        )}
      </form>
    </div>
  );
};
