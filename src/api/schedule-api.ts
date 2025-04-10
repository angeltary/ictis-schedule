import { instance } from './api-client'
import { Schedule } from '@/types/dto'

export const getSchedule = async (group: string) => {
  return (await instance.get<Schedule>(`/?group=${group}`)).data
}

export const getScheduleByWeek = async (group: string, week: string) => {
  return (await instance.get<Schedule>(`/?group=${group}&week=${week}`)).data
}
