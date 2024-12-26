import { useState } from 'react'
import { useGroups } from './useGroups'

export const useSearch = () => {
  const [search, setSearch] = useState('')
  const { data: groups } = useGroups()

  // TODO: почему тут через сет удаляются дубликаты, а в сервисе нет?
  const filteredItems =
    search && groups
      ? [
          ...new Set(
            groups
              .map(group => group.name)
              .filter(name =>
                name.toLowerCase().includes(search.toLowerCase()),
              ),
          ),
        ]
      : []

  return { search, setSearch, filteredItems }
}
