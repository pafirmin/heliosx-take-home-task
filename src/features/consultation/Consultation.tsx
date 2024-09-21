import { useState } from "react";
import Stepper from "../../components/stepper/Stepper";
import { api, CreateConsultationDTO } from "../../api/api";
import ConsultationQuestion from "./components/ConsultationQuestion";
import { ConsultationQuestionInfo } from "./types/types";
import ThankYou from "./components/ThankYou";
import { useMutation } from "@tanstack/react-query";

const questions: ConsultationQuestionInfo[] = [
  {
    title: "Are you a legal resident of Genovia?",
    name: "residency",
    options: [
      {
        label: "Yes, I am a full citizen of Genovia",
        value: "full citizen",
      },
      {
        label: "Yes, I am legally resident in Genovia.",
        value: "legal resident",
      },
      {
        label: "No, I am not a legal resident of Genovia.",
        value: "not legally resident",
      },
    ],
  },
  {
    title: "Have you ever been diagnosed with a Genovian pear allergy?",
    name: "previousDiagnosis",
    options: [
      {
        label:
          "Yes, I have previously been diagnosed with a Genovian pear allergy",
        value: "positive diagnosis",
      },
      {
        label: "No, I have never been diagnosed with a Genovian pear allergy.",
        value: "no diagnosis",
      },
    ],
  },
  {
    title: "Have you had any contact with Genovian pears in the past 12 weeks?",
    name: "pearContact",
    options: [
      {
        label:
          "Yes, I have had contact with Genovian Pears in the last 12 weeks",
        value: "positive contact",
      },
      {
        label:
          "No, I have not had contact with any Genovian pears in the last 12 weeks.",
        value: "no contact",
      },
    ],
  },
  {
    title: "Is there any history of Genovian pear allergies in your family?",
    name: "familyHistory",
    options: [
      {
        label: "Yes, my family has a history of Genovian pear allergies.",
        value: "positive history",
      },
      {
        label:
          "No, there is no history of Genovian pear allergies in my family.",
        value: "no history",
      },
    ],
  },
  {
    title: "Have you ever taken medication for a Genovian pear allergy?",
    name: "existingMedication",
    options: [
      {
        label:
          "Yes, I am currently taking medication for a Genovian pear allergy.",
        value: "currently medicating",
      },
      {
        label:
          "Yes, I have previously taken medication for a Genovian pear allergy but am not currently medicating.",
        value: "previously medicated",
      },
      {
        label: "No, I have never taken medication for a Genovian pear allergy",
        value: "never medicated",
      },
    ],
  },
];

export default function Consultation() {
  const [formValues, setFormValues] = useState<CreateConsultationDTO>({
    residency: "",
    pearContact: "",
    existingMedication: "",
    previousDiagnosis: "",
    familyHistory: "",
  });

  const mutation = useMutation({
    mutationFn: api.createConsultation,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    mutation.mutate(formValues);
  };

  if (mutation.isSuccess) {
    return <ThankYou />;
  }

  return (
    <div className="m-auto px-2">
      {mutation.isError && (
        <p>
          Unexpected error encountered while submitting your answers. We
          apologise for the inconvenience.
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <Stepper>
          {questions.map(({ title, name, options }) => (
            <ConsultationQuestion
              key={name}
              options={options}
              title={title}
              value={formValues[name]}
              disableNavigation={mutation.isPending}
              handleSelection={(val) =>
                setFormValues({ ...formValues, [name]: val })
              }
            />
          ))}
        </Stepper>
      </form>
    </div>
  );
}
