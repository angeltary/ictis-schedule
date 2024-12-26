import { useScheduleStore } from '../../stores/schedule.store'
import { IDay } from '../../types/schedule.types'
import { formatDateString, isNow, isToday } from '../../utils/date.utils'
import { ScheduleCell } from './ScheduleCell'

interface Props {
  day: IDay
}

export const ScheduleDay = ({ day }: Props) => {
  const timeSlots = useScheduleStore(state => state.timeSlots)

  return (
    <div className='grid grid-cols-8'>
      <ScheduleCell styles={isToday(day.date) ? 'bg-gray-200' : ''}>
        {(() => {
          const [first, ...rest] = formatDateString(day.date).split(',')
          return (
            <>
              {`${first},`}
              <br />
              {rest.join(' ')}
            </>
          )
        })()}
      </ScheduleCell>

      {day.lessons.map((lesson, index) => (
        <ScheduleCell
          key={index}
          type={lesson.type}
          styles={
            isToday(day.date) && isNow(timeSlots[index]) && lesson.type
              ? 'bg-rose-400'
              : ''
          }
        >
          {lesson.description}
        </ScheduleCell>
      ))}
    </div>
  )
}
