import { getLessonType } from '@/lib/utils/get-lesson-type'
import { parseAuditorium } from '@/lib/utils/parse-auditorium'
import { BookOpenText, Globe, Pencil } from 'lucide-react'

export default function LessonInfo({ lesson }: { lesson: string }) {
  const lessonType = getLessonType(lesson)

  if (lessonType === 'нет') {
    return
  }

  return (
    <div className='flex gap-1'>
      {lessonType === 'очно' ? (
        <>
          <BookOpenText className='h-[18px] w-[18px] text-[#7f973e]' />
          <div>очно</div>
          <div>{parseAuditorium(lesson)}</div>
        </>
      ) : lessonType === 'лекция' ? (
        <>
          <Pencil className='h-[18px] w-[18px] text-[#a94c4c]' />
          <div>лекция</div>
          <div>{parseAuditorium(lesson)}</div>
        </>
      ) : (
        <>
          <Globe className='h-[18px] w-[18px] text-[#3c5a9c]' />
          <div>онлайн</div>
        </>
      )}
    </div>
  )
}
