const WEEKDAY_MAPPING = {
  Пнд: 'Понедельник',
  Втр: 'Вторник',
  Срд: 'Среда',
  Чтв: 'Четверг',
  Птн: 'Пятница',
  Сбт: 'Суббота',
  Вск: 'Воскресенье',
} as const

export const formatDateString = (date: string) => {
  return Object.entries(WEEKDAY_MAPPING).reduce(
    (result, [short, full]) => result.replace(short, full),
    date,
  )
}

export const isToday = (dateStr: string) => {
  const today = new Date()
    .toLocaleDateString('ru-RU', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    })
    .toLowerCase()

  const day = formatDateString(dateStr)
    .toLowerCase()
    .replace('  ', ' ')
    .replace(',', ', ')

  return today === day
}

export const isNow = (timeStr: string) => {
  if (!timeStr) {
    return false
  }

  const now = new Date().toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  })

  const [start, end] = timeStr.split('-')

  const nowMinutes = timeToMinutes(now)
  const startMinutes = timeToMinutes(start)
  const endMinutes = timeToMinutes(end)

  return nowMinutes >= startMinutes && nowMinutes <= endMinutes
}

const timeToMinutes = (timeStr: string) => {
  const [hours, minutes] = timeStr.split(':')
  return parseInt(hours) * 60 + parseInt(minutes)
}
