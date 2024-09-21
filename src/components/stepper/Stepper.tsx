import { Children, createContext, useCallback, useMemo, useState } from "react";

type StepperProps = {
  children: React.ReactNode;
};

type StepperContextValue = {
  currentStep: number;
  totalSteps: number;
  hasNextStep: boolean;
  hasPrevStep: boolean;
  goToNextStep: () => void;
  goToPrevStep: () => void;
};

export const StepperContext = createContext<StepperContextValue | undefined>(
  undefined,
);

export default function Stepper({ children }: StepperProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const childrenLen = Children.toArray(children).length;
  const hasPrevStep = currentStep > 0;
  const hasNextStep = currentStep < childrenLen - 1;

  const activeEl = useMemo(() => {
    const childrenArr = Children.toArray(children);

    return childrenArr[currentStep];
  }, [currentStep, children]);

  const goToNextStep = useCallback(() => {
    if (hasNextStep) {
      setCurrentStep((prev) => prev + 1);
    }
  }, [currentStep, hasNextStep]);

  const goToPrevStep = useCallback(() => {
    if (hasPrevStep) {
      setCurrentStep((step) => step - 1);
    }
  }, [currentStep, hasPrevStep]);

  return (
    <StepperContext.Provider
      value={{
        currentStep,
        goToNextStep,
        goToPrevStep,
        hasNextStep,
        hasPrevStep,
        totalSteps: childrenLen,
      }}
    >
      {activeEl}
    </StepperContext.Provider>
  );
}
