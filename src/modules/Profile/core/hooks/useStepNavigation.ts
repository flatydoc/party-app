import { useState } from "react";

export const useStepNavigation = (initialStep: number, maxStep: number) => {
  const [currentStep, setCurrentStep] = useState(initialStep);

  const nextStep = () => {
    if (currentStep < maxStep) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return { currentStep, nextStep, prevStep, setCurrentStep };
};
