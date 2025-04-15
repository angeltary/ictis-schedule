import { getScheduleByWeek, getSchedule } from '@/api'
import { Schedule } from '@/types'
import { useQuery } from '@tanstack/react-query'

export const useSchedule = (group: string, week?: string) => {
  return useQuery<Schedule>({
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24,
    queryKey: ['schedule', group, week],
    queryFn: async () => {
      if (week) {
        return getScheduleByWeek(group, week)
      }

      return getSchedule(group)
    },
    meta: { persist: true },
  })
}
