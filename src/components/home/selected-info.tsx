'use client'

import { useSelectedItemStore } from '@/stores/selected-item-store'
import { useWeeksStore } from '@/stores/weeks-store'

export default function SelectedInfo() {
  const { selectedItem } = useSelectedItemStore()
  const { selectedWeek } = useWeeksStore()

  if (!selectedItem || !selectedWeek) {
    return
  }

  return (
    <div className='flex flex-col font-bold items-center justify-center gap-1 mb-2'>
      <div className='text-4xl'>{selectedItem}</div>
      <div className='text-2xl'>Неделя: {selectedWeek}</div>
    </div>
  )
}
