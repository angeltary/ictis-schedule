'use client'

import ScheduleDesktopView from '@/components/schedule/schedule-desktop-view'
import ScheduleMobileView from '@/components/schedule/schedule-mobile-view'
import { useSchedule } from '@/hooks'
import { useWeeksStore } from '@/stores'
import { useState, useEffect } from 'react'

export default function ScheduleTable({ group }: { group: string }) {
  const { selectedWeek, setSelectedWeek, setWeeks } = useWeeksStore()
  const [expandedCards, setExpandedCards] = useState<number[]>([])

  const { data: schedule, isLoading, isError } = useSchedule(group, selectedWeek)

  useEffect(() => {
    if (schedule) {
      setSelectedWeek(schedule.table.week.toString())
      setWeeks(schedule.weeks.map(week => week.toString()))
      setExpandedCards([])
    }
  }, [schedule, setSelectedWeek, setWeeks])

  const toggleCard = (index: number) => {
    setExpandedCards(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index],
    )
  }

  if (isLoading) {
    return <div className='p-2 text-center'>Загрузка расписания...</div>
  }

  if (isError || !schedule) {
    return
  }

  const headers = schedule.table.table.slice(0, 2)
  const scheduleData = schedule.table.table.slice(2)

  return (
    <div className='mb-[100px] w-full overflow-auto'>
      <div className='lg:hidden'>
        <ScheduleMobileView
          headers={headers}
          scheduleData={scheduleData}
          expandedCards={expandedCards}
          toggleCard={toggleCard}
        />
      </div>

      <div className='hidden shadow-sm lg:block'>
        <ScheduleDesktopView headers={headers} scheduleData={scheduleData} />
      </div>
    </div>
  )
}
