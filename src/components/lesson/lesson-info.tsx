import { getLessonType, parseAuditoriums } from '@/lib'
import { BookOpenText, Globe, Pencil } from 'lucide-react'

interface Props {
  lesson: string
}

export default function LessonInfo({ lesson }: Props) {
  const lessonType = getLessonType(lesson)

  if (lessonType === 'нет') {
    return
  }

  const lessonConfig = {
    очно: {
      icon: BookOpenText,
      color: 'text-[#7f973e]',
      showAuditorium: true,
    },
    лекция: {
      icon: Pencil,
      color: 'text-[#a94c4c]',
      showAuditorium: true,
    },
    онлайн: {
      icon: Globe,
      color: 'text-[#3c5a9c]',
      showAuditorium: false,
    },
  }

  const config = lessonConfig[lessonType]
  const Icon = config.icon

  return (
    <div className='flex gap-1'>
      <Icon className={`h-[18px] w-[18px] ${config.color}`} />
      <div>{lessonType}</div>
      {config.showAuditorium && <div>{parseAuditoriums(lesson)}</div>}
    </div>
  )
}
