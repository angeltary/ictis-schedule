'use client'

import { useMemo } from 'react'

import ScheduleTable from '@/components/schedule/schedule-table'

import { useItems } from '@/hooks/use-items'

import { useSelectedItemStore } from '@/stores/selected-item-store'

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
