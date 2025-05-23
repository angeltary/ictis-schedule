'use client'

import { useSelectedItemStore, useWeeksStore } from "@/stores"

export default function InfoCard() {
  const { selectedItem } = useSelectedItemStore()
  const { selectedWeek } = useWeeksStore()

  if (!selectedItem || !selectedWeek) {
    return
  }

  return (
    <div className='mb-2 flex flex-col items-center justify-center gap-1 font-bold'>
      <div className='text-4xl'>{selectedItem}</div>
      <div className='text-2xl'>Неделя: {selectedWeek}</div>
    </div>
  )
}
