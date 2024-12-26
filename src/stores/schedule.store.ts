import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface IScheduleStore {
  selectedResultName: string
  selectedWeek: number
  timeSlots: string[]
  setselectedResultName: (item: string) => void
  setSelectedWeek: (week: number) => void
  setTimeSlots: (slots: string[]) => void
  removeselectedResultName: () => void
}

export const useScheduleStore = create<IScheduleStore>()(
  persist(
    set => ({
      selectedResultName: '',
      selectedWeek: -1,
      timeSlots: [],
      setselectedResultName: (item: string) =>
        set({ selectedResultName: item }),
      setSelectedWeek: (week: number) => set({ selectedWeek: week }),
      setTimeSlots: (slots: string[]) => set({ timeSlots: slots }),
      removeselectedResultName: () => set({ selectedResultName: '' }),
    }),
    {
      name: 'schedule-storage',
      partialize: state => ({
        selectedResultName: state.selectedResultName,
      }),
    },
  ),
)
