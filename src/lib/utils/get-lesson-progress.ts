const convertTimeToSeconds = (time: string) => {
  const [hours, minutes] = time.split(':').map(Number)

  return hours * 3600 + minutes * 60
}

export interface LessonProgress {
  isCurrent: boolean
  progress: number
}

export const getLessonProgress = (time: string): LessonProgress => {
  const [startStr, endStr] = time.split('-')

  const start = convertTimeToSeconds(startStr)
  const end = convertTimeToSeconds(endStr)
  const total = end - start

  const now = new Date()
  const current =
    now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds()

  const isCurrent = current >= start && current <= end

  let progress = 0
  if (isCurrent) {
    const elapsedTime = current - start
    progress = Math.min(Math.round((elapsedTime / total) * 100), 100)
  } else if (current > end) {
    progress = 100
  }

  return {
    isCurrent,
    progress,
  }
}
