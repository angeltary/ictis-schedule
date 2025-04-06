'use client'

import ScheduleTable from '@/components/home/schedule/schedule-table'
import { useItems } from '@/hooks/use-items'
import { useSelectedItemStore } from '@/stores/selected-item-store'
import { useMemo } from 'react'

export default function ScheduleWrapper() {
  const { selectedItem } = useSelectedItemStore()

  const { data: items } = useItems()

  const group = useMemo(() => {
    if (selectedItem && items) {
      return items.find(item => item.name === selectedItem)?.group
    }
    return
  }, [selectedItem, items])

  if (!group) {
    return
  }

  return <ScheduleTable group={group} />
}
