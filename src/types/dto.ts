import { ScheduleTable } from './schedule'

export type Items = {
  choices: {
    name: string
    id: string
    group: string
  }[]
}

export type Schedule = {
  table: ScheduleTable
  weeks: number[]
}
