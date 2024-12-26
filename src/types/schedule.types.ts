export interface ISchedule {
  lessonNumbers: string[]
  timeSlots: string[]
  week: number
  weeks: number[]
  days: IDay[]
}

export interface IDay {
  date: string
  lessons: ILesson[]
}

export interface ILesson {
  description: string
  type: string
}
