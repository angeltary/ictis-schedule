import InfoCard from '@/components/home/info-card'
import SearchBar from '@/components/home/search-bar'
import WeekSelector from '@/components/home/week-selector'
import ScheduleWrapper from '@/components/schedule/schedule-wrapper'

export default function HomePage() {
  return (
    <>
      <SearchBar />
      <InfoCard />
      <WeekSelector />
      <ScheduleWrapper />
    </>
  )
}
