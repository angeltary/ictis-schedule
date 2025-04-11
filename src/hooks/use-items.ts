import { getItems } from '@/api/items-api'
import { useQuery } from '@tanstack/react-query'

export const useItems = () => {
  return useQuery({
    staleTime: 1000 * 60 * 60 * 24 * 3,
    gcTime: 1000 * 60 * 60 * 24 * 3,
    queryKey: ['items'],
    queryFn: getItems,
    meta: { persist: true },
  })
}
