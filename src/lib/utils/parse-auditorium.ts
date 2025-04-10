export const parseAuditorium = (lesson: string) => {
  const regex = /(?:^|[^\wа-яА-Я])([ГДИЕКАБ])[\s-](\d+)/g

  const matches = [...lesson.matchAll(regex)]

  if (matches.length === 0) {
    return ''
  }

  return matches.map(match => `${match[1]}-${match[2]}`).join(', ')
}
