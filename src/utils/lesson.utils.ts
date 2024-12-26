const LESSON_TYPE_STYLES = {
  'лаб.': 'bg-red-100',
  'лек.': 'bg-green-100',
  'пр.': 'bg-yellow-100',
  'удал.': 'bg-blue-100',
  'вуц.': 'bg-violet-100',
} as const

export const parseLessonType = (lessonStr: string) => {
  if (lessonStr.includes('LMS')) {
    return 'удал.'
  }
  if (lessonStr.includes('Военная подготовка')) {
    return 'вуц.'
  }

  const typeMatch = lessonStr.match(/^(лек\.|пр\.|лаб\.)/)
  if (!typeMatch && lessonStr) {
    return 'пр.'
  }
  return typeMatch ? typeMatch[1] : null
}

export const getLessonTypeStyle = (type: string) => {
  return (
    LESSON_TYPE_STYLES[type as keyof typeof LESSON_TYPE_STYLES] || 'bg-gray-100'
  )
}
