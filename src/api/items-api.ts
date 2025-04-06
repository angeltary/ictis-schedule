import { Items } from '@/types/dto'
import { instance } from './api-client'

export const getItems = async () => {
  const response = (await instance.get<Items>('/?query=.')).data

  return response.choices.map(item => ({
    name: item.name,
    group: item.group,
  }))
}
