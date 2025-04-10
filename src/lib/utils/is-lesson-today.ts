export const isLessonToday = (date: string) => {
  const today = new Date()
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }

  const formatted = today.toLocaleDateString('ru-RU', options)

  return formatted.toLowerCase() === date.toLowerCase()
}
