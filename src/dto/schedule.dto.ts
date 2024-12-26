export interface ScheduleResponseDto {
  table: {
    type: string
    name: string
    week: number
    group: string
    table: string[][]
    link: string
  }
  weeks: number[]
}
