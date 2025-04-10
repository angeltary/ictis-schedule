'use client'

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

import { cn } from '@/lib/utils/tailwind-merge'

import { useWeeksStore } from '@/stores/weeks-store'

export default function WeekSelector() {
  const { weeks, selectedWeek, setSelectedWeek } = useWeeksStore()

  return (
    <ScrollArea className='w-full'>
      <div className='mb-4 flex flex-col items-center justify-center gap-4 font-bold'>
        <ul className='flex gap-2'>
          {weeks.map(week => (
            <li
              key={week}
              onClick={() => setSelectedWeek(week)}
              className={cn(
                'border-primary hover:bg-accent flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border',
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
