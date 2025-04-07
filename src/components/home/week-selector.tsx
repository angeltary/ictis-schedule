'use client'

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils/tailwind-merge'
import { useWeeksStore } from '@/stores/weeks-store'

export default function WeekSelector() {
  const { weeks, selectedWeek, setSelectedWeek } = useWeeksStore()

  return (
    <ScrollArea className='w-full'>
      <div className='flex flex-col justify-center items-center gap-4 font-bold mb-4'>
        <ul className='flex gap-2'>
          {weeks.map(week => (
            <li
              key={week}
              onClick={() => setSelectedWeek(week)}
              className={cn(
                'w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer border border-primary hover:bg-accent',
                week === selectedWeek &&
                  'hover:bg-primary bg-primary text-primary-foreground border-none',
              )}
            >
              {week}
            </li>
          ))}
        </ul>
      </div>
      <ScrollBar className='hidden' orientation='horizontal' />
    </ScrollArea>
  )
}
