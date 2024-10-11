import { create } from 'zustand'

// TODO: Change to UUID when logic is implemented
export type UserId = string | number | null
export type SetSelectedUserId = (id: UserId) => void
export type HasSelectedUser = () => boolean

export interface SelectedUserState {
  selectedUserId: UserId
  setSelectedUserId: (id: UserId) => void
  hasSelectedUser: () => boolean
}

export const useSelectedUserState = create<SelectedUserState>((set, get) => ({
  selectedUserId: null,
  setSelectedUserId: (id: UserId) => set({ selectedUserId: id }),
  hasSelectedUser: () => get().selectedUserId !== null,
}))
