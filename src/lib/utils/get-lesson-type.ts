export const getLessonType = (lesson: string) => {
  if (!lesson) {
    return 'нет'
  }

  if (lesson.includes('LMS')) {
    return 'онлайн'
  }

  if (lesson.slice(0, 3).includes('лек')) {
    return 'лекция'
  }

  return 'очно'
}
