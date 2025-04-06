'use client'

import { getFormattedDate } from '@/lib/utils/get-formatted-date'
import { cn } from '@/lib/utils/tailwind-merge'
import { ChevronDown } from 'lucide-react'

type Props = {
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
    <div className='flex flex-col gap-4'>
      {scheduleData.map((item, index) => (
        <div
          key={index}
          className='border rounded-lg shadow-sm overflow-hidden'
        >
          <div
            className='flex justify-between items-center p-4 bg-muted/30 cursor-pointer'
            onClick={() => toggleCard(index)}
          >
            <div className='font-bold'>{getFormattedDate(item[0])}</div>
            <ChevronDown
              className={cn(
                'h-5 w-5 transition-transform',
                expandedCards.includes(index) && 'transform rotate-180',
              )}
            />
          </div>

          {expandedCards.includes(index) && (
            <div className='p-4 space-y-3'>
              {item.slice(1).map((item, index) => (
                <div
                  key={index}
                  className='border-b pb-2 last:border-b-0 last:pb-0'
                >
                  <div className='font-medium text-sm text-muted-foreground'>
                    {headers[1][index + 1]}
                  </div>
                  <div className='mt-1'>{item || '—'}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
