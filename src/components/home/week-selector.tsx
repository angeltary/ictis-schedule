'use client'

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils/tailwind-merge'
import { useWeeksStore } from '@/stores/weeks-store'

export interface Artwork {
  artist: string
  art: string
}

export const works: Artwork[] = [
  {
    artist: 'Ornella Binni',
    art: 'https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80',
  },
  {
    artist: 'Tom Byrom',
    art: 'https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80',
  },
  {
    artist: 'Vladimir Malyavko',
    art: 'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80',
  },
]

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
                'w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer border-black border-1 hover:bg-stone-100',
                week === selectedWeek &&
                  'hover:bg-black/85 bg-black text-white',
              )}
            >
              {week}
            </li>
          ))}
        </ul>
      </div>
      <ScrollBar orientation='horizontal' />
    </ScrollArea>
  )
}
