export type CreateConsultationDTO = {};

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
