import axios from 'axios'
import { API_URL } from '../config/api.config'
import { ScheduleDto } from '../dto/schedule.dto'
import { ISchedule } from '../types/schedule.types'
import { parseLessonType } from '../utils/lesson.utils'
import { resultsService } from './results.service'

class ScheduleService {
  async getSchedule(query: string, week: number): Promise<ScheduleDto> {
    const resultId = await resultsService.getResultId(query)

    if (!resultId) {
      throw new Error(`Группа не найдена: ${query}`)
    }

    let url = `${API_URL}/?group=${resultId}`
    if (week !== -1) {
      url += `&week=${week}`
    }

    const { data } = await axios.get<ScheduleDto>(url)
    return data
  }

  parseScheduleData(schedule: ScheduleDto): ISchedule {
    const tableData = schedule.table.table

    const lessonNumbers = tableData[0].slice(1)
    const timeSlots = tableData[1].slice(1)

    const days = tableData.slice(2).map(day => {
      return {
        date: day[0],
        lessons: day.slice(1).map(lessonStr => {
          const type = parseLessonType(lessonStr)
          return {
            type: type || '',
            description: lessonStr.replace('.', '. '),
          }
        }),
      }
    })

    return {
      lessonNumbers,
      timeSlots,
      week: schedule.table.week,
      weeks: schedule.weeks,
      days,
    }
  }
}

export const scheduleService = new ScheduleService()
