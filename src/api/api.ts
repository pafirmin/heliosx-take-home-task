export type CreateConsultationDTO = {
  residency: string;
  pearContact: string;
  existingMedication: string;
  previousDiagnosis: string;
  familyHistory: string;
};

export function createConsultation(vals: CreateConsultationDTO): Promise<void> {
  // Simulate asynchronous request
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(vals);
      resolve();
    }, 400),
  );
}

export const api = {
  createConsultation,
};
