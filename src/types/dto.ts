import { ScheduleTable } from './schedule'

export interface Items {
  choices: {
    name: string
    id: string
    group: string
  }[]
}

export interface Schedule {
  table: ScheduleTable
  weeks: number[]
}
