import { create } from 'zustand'

export type ToggleSubmitting = () => void

export interface FormSubmissionState {
  isSubmitting: boolean
  toggleSubmitting: ToggleSubmitting
}

export const useFormSubmissionState = create<FormSubmissionState>(set => ({
  isSubmitting: false,
  toggleSubmitting: () => set(state => ({ isSubmitting: !state.isSubmitting })),
}))
