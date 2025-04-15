'use client'

import { LessonCard } from '@/components/lesson/lesson-card'
import { cn, isLessonToday, getFormattedDate } from '@/lib'
import { ChevronDown } from 'lucide-react'

interface Props {
  headers: string[][]
  scheduleData: string[][]
  expandedCards: number[]
  toggleCard: (index: number) => void
}

export default function ScheduleMobileView({
  headers,
  scheduleData,
  expandedCards,
  toggleCard,
}: Props) {
  return (
    <div className='flex flex-col gap-4 pb-2'>
      {scheduleData.map((item, index) => (
        <div key={index} className='overflow-hidden rounded-lg shadow-sm border'>
          <div
            className={cn(
              'bg-muted/50 dark:bg-muted/20 flex cursor-pointer items-center justify-between p-4',
              isLessonToday(getFormattedDate(item[0])) &&
                'bg-gradient-to-r from-[#e7e7e7] dark:from-muted',
            )}
            onClick={() => toggleCard(index)}
          >
            <div className='font-bold'>{getFormattedDate(item[0])}</div>
            <ChevronDown
              className={cn(
                'h-5 w-5 transition-transform',
                expandedCards.includes(index) && 'rotate-180 transform',
              )}
            />
          </div>
          {expandedCards.includes(index) && (
            <div className='space-y-3 p-4'>
              {item.slice(1).map((lessonData, lessonIndex) => (
                <LessonCard
                  key={lessonIndex}
                  day={getFormattedDate(item[0])}
                  time={headers[1][lessonIndex + 1]}
                  lesson={lessonData}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
