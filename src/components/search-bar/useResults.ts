import { useQuery } from '@tanstack/react-query'
import { resultsService } from '../../services/results.service'

export const useResults = () => {
  return useQuery({
    queryKey: ['results'],
    queryFn: async () => await resultsService.getResults(),
    staleTime: 1000 * 60 * 60 * 24 * 7,
  })
}
