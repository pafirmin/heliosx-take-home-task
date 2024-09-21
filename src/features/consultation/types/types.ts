import { CreateConsultationDTO } from "../../../api/api";

export type ConsultationValues = {
  residency: string;
  pearContact: string;
  existingMedication: string;
  previousDiagnosis: string;
  familyHistory: string;
};

export type ConsultationQuestionOption = {
  label: string;
  value: string;
};

export type ConsultationQuestionInfo = {
  title: string;
  name: keyof CreateConsultationDTO;
  options: ConsultationQuestionOption[];
};
