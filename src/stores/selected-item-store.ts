import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Store = {
  selectedItem: string
  setSelectedItem: (selectedItem: string) => void
}

export const useSelectedItemStore = create<Store>()(
  persist(
    set => ({
      selectedItem: '',
      setSelectedItem: (selectedItem: string) => set({ selectedItem }),
    }),
    {
      name: 'selected-item-storage',
    },
  ),
)
