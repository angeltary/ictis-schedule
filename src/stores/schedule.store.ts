import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface IScheduleStore {
  selectedResultName: string
  selectedWeek: number
  timeSlots: string[]
  setSelectedResultName: (item: string) => void
  setSelectedWeek: (week: number) => void
  setTimeSlots: (slots: string[]) => void
  removeSelectedResultName: () => void
}

export const useScheduleStore = create<IScheduleStore>()(
  persist(
    set => ({
      selectedResultName: '',
      selectedWeek: -1,
      timeSlots: [],
      setSelectedResultName: (item: string) =>
        set({ selectedResultName: item }),
      setSelectedWeek: (week: number) => set({ selectedWeek: week }),
      setTimeSlots: (slots: string[]) => set({ timeSlots: slots }),
      removeSelectedResultName: () => set({ selectedResultName: '' }),
    }),
    {
      name: 'schedule-storage',
      partialize: state => ({
        selectedResultName: state.selectedResultName,
      }),
    },
  ),
)
