import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Store {
  selectedWeek: string
  weeks: string[]
  setSelectedWeek: (selectedWeek: string) => void
  setWeeks: (weeks: string[]) => void
}

export const useWeeksStore = create<Store>()(
  persist(
    set => ({
      selectedWeek: '',
      weeks: [],
      setSelectedWeek: (selectedWeek: string) => set({ selectedWeek }),
      setWeeks: (weeks: string[]) => set({ weeks }),
    }),
    {
      name: 'selected-week-storage',
    },
  ),
)
