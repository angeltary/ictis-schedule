import { useState } from 'react'
import { useGroups } from './useGroups'

export const useSearch = () => {
  const [search, setSearch] = useState('')
  const { data: groups } = useGroups()

  const filteredItems =
    search && groups
      ? groups
          .map(group => group.name)
          .filter(name => name.toLowerCase().includes(search.toLowerCase()))
      : []

  return { search, setSearch, filteredItems }
}
