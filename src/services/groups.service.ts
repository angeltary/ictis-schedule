import axios from 'axios'
import { API_URL } from '../config/api.config'
import { GroupsResponseDto } from '../dto/groups.dto'
import { IGroup } from '../types/groups.types'

class GroupsService {
  private groups: Map<string, string> = new Map()
  private getGroupsUrl = `${API_URL}/?query=${encodeURIComponent('.')}`

  async getGroups(): Promise<IGroup[]> {
    if (this.groups.size === 0) {
      const { data } = await axios.get<GroupsResponseDto>(this.getGroupsUrl)
      const parsedGroups = this.parseGroupsData(data)
      parsedGroups.forEach(group => {
        if (!this.groups.has(group.name) && !this.groups.has(group.id)) {
          this.groups.set(group.name, group.id)
        }
      })

      return parsedGroups
    }

    return Array.from(this.groups.entries()).map(([name, id]) => ({
      name,
      id,
    }))
  }

  parseGroupsData(response: GroupsResponseDto): IGroup[] {
    return response.choices.map(group => ({
      name: group.name,
      id: group.group,
    }))
  }

  getGroupId(name: string): string | undefined {
    return this.groups.get(name)
  }

  async findGroupsContaining(search: string): Promise<IGroup[]> {
    const allGroups = await this.getGroups()
    return allGroups.filter(group => group.name.includes(search))
  }
}

export const groupsService = new GroupsService()
