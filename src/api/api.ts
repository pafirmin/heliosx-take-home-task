import z from "zod";

export const CreateConsultationSchema = z.object({
  residency: z.string(),
  pearContact: z.string(),
  existingMedication: z.string(),
  previousDiagnosis: z.string(),
  familyHistory: z.string(),
});

export type CreateConsultationDTO = z.infer<typeof CreateConsultationSchema>;

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
