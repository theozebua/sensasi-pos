import { create } from 'zustand'

export type SetErrorMessage = (identifier: string, message: string) => void
export type ClearErrorMessage = () => void

export interface InputErrorMessageState {
  identifier: string
  message: string
}

export interface ErrorMessageState {
  fields: InputErrorMessageState[]
  setErrorMessage: SetErrorMessage
  clearErrorMessages: ClearErrorMessage
}

export const useErrorMessageState = create<ErrorMessageState>(set => ({
  fields: [],
  setErrorMessage: (identifier: string, message: string) =>
    set(state => {
      const existingFieldIndex = state.fields.findIndex(
        field => field.identifier === identifier,
      )

      if (existingFieldIndex !== -1) {
        const updatedFields = [...state.fields]

        updatedFields[existingFieldIndex] = { identifier, message }

        return { fields: updatedFields }
      }

      return {
        fields: [...state.fields, { identifier, message }],
      }
    }),
  clearErrorMessages: () =>
    set(() => {
      return {
        fields: [],
      }
    }),
}))
