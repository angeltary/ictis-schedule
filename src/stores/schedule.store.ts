import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface IScheduleStore {
  selectedGroupName: string
  selectedWeek: number
  timeSlots: string[]
  setSelectedGroupName: (item: string) => void
  setSelectedWeek: (week: number) => void
  setTimeSlots: (slots: string[]) => void
  removeSelectedGroupName: () => void
}

export const useScheduleStore = create<IScheduleStore>()(
  persist(
    set => ({
      selectedGroupName: '',
      selectedWeek: -1,
      timeSlots: [],
      setSelectedGroupName: (item: string) => set({ selectedGroupName: item }),
      setSelectedWeek: (week: number) => set({ selectedWeek: week }),
      setTimeSlots: (slots: string[]) => set({ timeSlots: slots }),
      removeSelectedGroupName: () => set({ selectedGroupName: '' }),
    }),
    {
      name: 'schedule-storage',
      partialize: state => ({
        selectedGroupName: state.selectedGroupName,
      }),
    },
  ),
)
