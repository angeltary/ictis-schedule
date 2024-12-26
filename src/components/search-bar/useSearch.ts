import { useState } from 'react'
import { useResults } from './useResults'

export const useSearch = () => {
  const [search, setSearch] = useState('')
  const { data: results } = useResults()

  // TODO: почему тут через сет удаляются дубликаты, а в сервисе нет?
  const filteredItems =
    search && results
      ? [
          ...new Set(
            results
              .map(result => result.name)
              .filter(name =>
                name.toLowerCase().includes(search.toLowerCase()),
              ),
          ),
        ]
      : []

  return { search, setSearch, filteredItems }
}
