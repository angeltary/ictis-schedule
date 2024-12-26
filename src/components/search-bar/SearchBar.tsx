import { Search } from 'lucide-react'
import { useScheduleStore } from '../../stores/schedule.store'
import { useSearch } from './useSearch'

export const SearchBar = () => {
  const { search, setSearch, filteredItems } = useSearch()

  const setSelectedResultName = useScheduleStore(
    state => state.setSelectedResultName,
  )

  return (
    <div className='mx-auto max-w-screen-sm px-4'>
      <div className='relative mb-4'>
        <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
          <Search className='h-4 w-4 text-gray-500' />
        </span>

        <input
          className='w-full rounded-md bg-gray-100 hover:bg-gray-200 py-2.5 pl-10 pr-4 shadow-sm sm:text-sm transition'
          type='text'
          placeholder='Введите группу или фамилию преподавателя'
          value={search}
          onChange={e => {
            setSearch(e.target.value)
          }}
          onKeyDown={e => {
            if (e.key === 'Enter' && filteredItems.length > 0) {
              setSelectedResultName(filteredItems[0])
              setSearch('')
            }
          }}
        />
      </div>

      {filteredItems.length > 0 && (
        <ul className='rounded-md'>
          {filteredItems.map(item => (
            <li
              key={item}
              onClick={() => {
                setSelectedResultName(item)
                setSearch('')
              }}
              className='mb-2.5 py-2.5 px-4 cursor-pointer bg-gray-100 hover:bg-gray-200 shadow-sm transition rounded-md'
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
