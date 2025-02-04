import { useQuery } from '@tanstack/react-query'
import { useEffect, useMemo } from 'react'
import { scheduleService } from '../../services/schedule.service'
import { useScheduleStore } from '../../stores/schedule.store'
import { useResults } from '../search-bar/useResults'
import { ScheduleCell } from './ScheduleCell'
import { ScheduleDay } from './ScheduleDay'

export const ScheduleTable = () => {
  const selectedResultName = useScheduleStore(state => state.selectedResultName)
  const setSelectedWeek = useScheduleStore(state => state.setSelectedWeek)
  const selectedWeek = useScheduleStore(state => state.selectedWeek)
  const setTimeSlots = useScheduleStore(state => state.setTimeSlots)

  const { isSuccess: isResultsSuccess } = useResults()

  const { data: schedule } = useQuery({
    queryKey: ['schedule', selectedResultName, selectedWeek],
    queryFn: async () =>
      await scheduleService.getSchedule(selectedResultName, selectedWeek),
    enabled: isResultsSuccess,
    placeholderData: prev => prev,
    staleTime: 1000 * 60 * 60,
  })

  const scheduleItems = useMemo(() => {
    if (schedule && selectedWeek !== -1) {
      return scheduleService.parseScheduleData(schedule)
    }
    return undefined
  }, [schedule, selectedWeek])

  useEffect(() => {
    if (schedule?.table) {
      setTimeSlots(scheduleItems?.timeSlots || [])
      if (selectedWeek === -1) {
        setSelectedWeek(schedule.table.week)
      }
    }
  }, [
    schedule,
    scheduleItems?.timeSlots,
    selectedWeek,
    setSelectedWeek,
    setTimeSlots,
  ])

  return (
    <div className='mx-auto px-4 max-w-screen-xl mt-4 space-y-4 text-sm'>
      {/* Название группы и выбранная неделя */}
      {selectedResultName && selectedWeek !== -1 && (
        <div className='flex flex-col sm:flex-row gap-2 justify-center font-bold text-2xl sm:text-4xl text-center'>
          <>
            Расписание для
            <span className='bg-gray-200 px-2 pb-1 rounded-xl'>
              {selectedResultName}
            </span>
          </>

          <>
            Неделя
            <span className='bg-gray-200 px-2 pb-1 rounded-xl'>
              {selectedWeek}
            </span>
          </>
        </div>
      )}

      {selectedResultName && scheduleItems && (
        <>
          {/* Недели */}
          <div className='overflow-x-auto -mx-4 px-4'>
            <ul className='flex gap-2 mb-4 justify-start sm:justify-center min-w-[600px] sm:min-w-0'>
              {scheduleItems.weeks.map(week => (
                <li
                  key={week}
                  onClick={() => {
                    setSelectedWeek(Number(week))
                  }}
                  className={`
                    px-4 p-3 font-bold rounded-lg transition cursor-pointer text-center whitespace-nowrap
                    ${
                      schedule && Number(week) === selectedWeek
                        ? 'bg-blue-100 hover:bg-blue-200'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }
                  `}
                >
                  {week}
                </li>
              ))}
            </ul>
          </div>

          <div className='shadow-sm rounded-md overflow-x-auto'>
            <div className='min-w-[800px]'>
              {/* Разметка пар */}
              <ul className='grid grid-cols-8'>
                <ScheduleCell>Пары</ScheduleCell>

                {scheduleItems.lessonNumbers.map(number => (
                  <ScheduleCell key={number}>{number}</ScheduleCell>
                ))}
              </ul>

              {/* Разметка времени */}
              <ul className='grid grid-cols-8'>
                <ScheduleCell>Время</ScheduleCell>

                {scheduleItems.timeSlots.map(slot => (
                  <ScheduleCell key={slot}>{slot}</ScheduleCell>
                ))}
              </ul>

              {/* Дни с расписанием */}
              <>
                {scheduleItems.days.map(day => (
                  <ScheduleDay key={day.date} day={day} />
                ))}
              </>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
