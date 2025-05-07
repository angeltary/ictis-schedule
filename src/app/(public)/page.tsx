import InfoCard from '@/components/home/info-card'
import SearchBar from '@/components/home/search-bar'
import WeekSelector from '@/components/home/week-selector'
import ScheduleTable from '@/components/schedule/schedule-table'

export default function HomePage() {
  return (
    <>
      <SearchBar />
      <InfoCard />
      <WeekSelector />
      <ScheduleTable />
    </>
  )
}
