import LessonInfo from '@/components/lesson/lesson-info'
import { getLessonProgress } from '@/lib/utils/get-lesson-progress'
import { isLessonToday } from '@/lib/utils/is-lesson-today'
import { useEffect, useState } from 'react'

interface Props {
  day: string
  time: string
  lesson: string
}

export function LessonCard({ day, time, lesson }: Props) {
  const [progress, setProgress] = useState(0)
  const [isCurrent, setIsCurrent] = useState(false)

  useEffect(() => {
    const updateProgress = () => {
      const { isCurrent: current, progress: lessonProgress } =
        getLessonProgress(time)

      setIsCurrent(current)
      setProgress(lessonProgress)
    }

    updateProgress()
    const interval = setInterval(updateProgress, 10000)

    return () => clearInterval(interval)
  }, [time])

  return (
    <div className='border-b pb-2 last:border-b-0 last:pb-0'>
      <div className='text-muted-foreground flex justify-between gap-2 text-sm font-medium'>
        <div>{time}</div>
        <LessonInfo lesson={lesson} />
      </div>
      <div className='my-1'>{lesson || '-'}</div>

      {isLessonToday(day) && isCurrent && (
        <div className='w-full rounded-full bg-progress-bar dark:bg-muted/50'>
          <div
            className='h-1.5 rounded-full bg-primary'
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
    </div>
  )
}
