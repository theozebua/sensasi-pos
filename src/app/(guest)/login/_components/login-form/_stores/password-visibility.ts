import { create } from 'zustand'

export type ToggleVisibility = () => void

export interface PasswordVisibilityState {
  isVisible: boolean
  toggleVisibility: ToggleVisibility
}

export const usePasswordVisibilityState = create<PasswordVisibilityState>(
  set => ({
    isVisible: false,
    toggleVisibility: () =>
      set(state => ({ ...state, isVisible: !state.isVisible })),
  }),
)
