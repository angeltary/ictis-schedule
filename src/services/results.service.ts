import axios from 'axios'
import { API_URL } from '../config/api.config'
import { ResultsDto } from '../dto/results.dto'
import { IResult } from '../types/results.types'

class ResultsService {
  private results: Map<string, string> = new Map()
  private getResultsUrl = `${API_URL}/?query=${encodeURIComponent('.')}`

  async getResults(): Promise<IResult[]> {
    if (this.results.size === 0) {
      const { data } = await axios.get<ResultsDto>(this.getResultsUrl)
      const parsedResults = this.parseResultsData(data)
      parsedResults.forEach(result => {
        if (!this.results.has(result.name) && !this.results.has(result.id)) {
          this.results.set(result.name, result.id)
        }
      })

      return parsedResults
    }

    return Array.from(this.results.entries()).map(([name, id]) => ({
      name,
      id,
    }))
  }

  parseResultsData(response: ResultsDto): IResult[] {
    return response.choices.map(result => ({
      name: result.name,
      id: result.group,
    }))
  }

  getResultId(name: string): string | undefined {
    return this.results.get(name)
  }
}

export const resultsService = new ResultsService()
