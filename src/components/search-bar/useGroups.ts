import { useQuery } from '@tanstack/react-query'
import { groupsService } from '../../services/groups.service'

export const useGroups = () => {
  return useQuery({
    queryKey: ['groups'],
    queryFn: async () => await groupsService.getGroups(),
    staleTime: 1000 * 60 * 60 * 24 * 7,
  })
}
