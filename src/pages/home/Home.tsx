import { Navbar } from '../../components/navbar/Navbar'
import { ScheduleTable } from '../../components/schedule/ScheduleTable'
import { SearchBar } from '../../components/search-bar/SearchBar'

export const Home = () => {
  return (
    <>
      <Navbar />

      <div className='my-6'>
        <SearchBar />
        <ScheduleTable />
      </div>
    </>
  )
}
