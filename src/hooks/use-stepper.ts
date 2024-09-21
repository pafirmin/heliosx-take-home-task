import { useContext } from "react";
import { StepperContext } from "../components/stepper/Stepper";

export default function useStepper() {
  const ctxValue = useContext(StepperContext);

  if (!ctxValue) {
    throw new Error("useStepper must be used within a Stepper component");
  }

  return ctxValue;
}
