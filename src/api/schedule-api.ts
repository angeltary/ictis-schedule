import { Schedule } from '@/types/dto'
import { instance } from './api-client'

export const getSchedule = async (group: string) => {
  return (await instance.get<Schedule>(`/?group=${group}`)).data
}

export const getScheduleByWeek = async (group: string, week: string) => {
  return (await instance.get<Schedule>(`/?group=${group}&week=${week}`)).data
}
