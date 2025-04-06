export type ScheduleRow = string[]

export type ScheduleTable = {
  type: string
  name: string
  week: number
  group: string
  table: ScheduleRow[]
  link: string
}
