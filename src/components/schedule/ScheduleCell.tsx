import { getLessonTypeStyle } from '../../utils/lesson.utils'

interface Props {
  children: React.ReactNode
  type?: string
  styles?: string
}

export const ScheduleCell = ({ children, type, styles }: Props) => {
  return (
    <div
      className={`
        p-1.5 sm:p-2.5
        flex
        flex-col
        text-center 
        justify-center
        text-xs sm:text-sm
        ${type && !styles ? getLessonTypeStyle(type) : 'bg-gray-100'}
        ${styles}
      `}
    >
      {children}
    </div>
  )
}
