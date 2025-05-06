export const getFormattedDate = (date: string) => {
  const dayAbbreviations: Record<string, string> = {
    Пнд: 'Понедельник',
    Втр: 'Вторник',
    Срд: 'Среда',
    Чтв: 'Четверг',
    Птн: 'Пятница',
    Сбт: 'Суббота',
    Вск: 'Воскресенье',
  }

  let formattedDate = date
  for (const [abbr, fullName] of Object.entries(dayAbbreviations)) {
    formattedDate = formattedDate.replace(abbr, fullName)
  }

  formattedDate = formattedDate.replace(/,(?!\s)/g, ', ')
  formattedDate = formattedDate.replace(/\s{2,}/g, ' ')
  formattedDate = formattedDate.replace(/\b0+(\d+)/g, '$1')

  return formattedDate
}
