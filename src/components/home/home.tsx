'use client'

import ScheduleWrapper from '@/components/home/schedule/schedule-wrapper'
import SearchBar from '@/components/home/search-bar'
import SelectedItem from '@/components/home/selected-info'
import WeekSelector from '@/components/home/week-selector'

export default function Home() {
  return (
    <>
      <SearchBar />
      <SelectedItem />
      <WeekSelector />
      <ScheduleWrapper />
    </>
  )
}
