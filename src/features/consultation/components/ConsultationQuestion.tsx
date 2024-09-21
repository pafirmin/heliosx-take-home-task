import Button from "../../../components/button/Button";
import useStepper from "../../../hooks/use-stepper";
import { ConsultationQuestionOption } from "../types/types";

type ConsultationQuestionProps = {
  options: ConsultationQuestionOption[];
  title: string;
  value: string;
  disableNavigation: boolean;
  handleSelection: (val: string) => void;
  note?: string;
};

export default function ConsultationQuestion({
  options,
  title,
  value,
  disableNavigation,
  handleSelection,
}: ConsultationQuestionProps) {
  const {
    currentStep,
    totalSteps,
    goToNextStep,
    goToPrevStep,
    hasPrevStep,
    hasNextStep,
  } = useStepper();

  return (
    <div>
      <div className="flex items-center mb-4">
        <button
          title="Previous step"
          className={
            (hasPrevStep ? "" : "invisible") + " flex-1 text-left text-4xl"
          }
          onClick={goToPrevStep}
          disabled={!hasPrevStep || disableNavigation}
          aria-label="Previous step"
          aria-hidden={!hasPrevStep}
        >
          &lsaquo;
        </button>
        <p>
          Question {currentStep + 1} / {totalSteps}
        </p>
        <div className="flex-1" />
      </div>
      <p className="mb-2 font-bold">{title}</p>
      <fieldset className="flex flex-col gap-4">
        {options.map((option) => (
          <label key={option.value} htmlFor={option.value}>
            <input
              id={option.value}
              type="radio"
              value={option.value}
              checked={value === option.value}
              onChange={(e) => handleSelection(e.target.value)}
            />{" "}
            {option.label}
          </label>
        ))}
      </fieldset>
      {hasNextStep ? (
        <Button
          fullWidth
          type="button"
          className="mt-4"
          disabled={!value || disableNavigation}
          onClick={goToNextStep}
        >
          Continue
        </Button>
      ) : (
        <Button
          fullWidth
          className="mt-4"
          disabled={!value || disableNavigation}
        >
          Submit
        </Button>
      )}
    </div>
  );
}
