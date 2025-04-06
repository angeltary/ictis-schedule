'use client'

import { Input } from '@/components/ui/input'
import { useItems } from '@/hooks/use-items'
import { cn } from '@/lib/utils/tailwind-merge'
import { useSelectedItemStore } from '@/stores/selected-item-store'
import { Search } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function SearchBar() {
  const [inputValue, setInputValue] = useState('')
  const [filteredItems, setFilteredItems] = useState<string[]>([])

  const { selectedItem, setSelectedItem } = useSelectedItemStore()

  const { data: items } = useItems()

  useEffect(() => {
    if (inputValue.trim() === '' || !items) {
      setFilteredItems([])
      return
    }

    const filtered = items
      .filter(item =>
        item.name.toLowerCase().includes(inputValue.toLowerCase()),
      )
      .slice(0, 15)

    setFilteredItems(filtered.map(item => item.name))
  }, [inputValue, items])

  const handleSelectItem = (item: string) => {
    setInputValue('')
    setSelectedItem(item)
  }

  return (
    <div className='relative w-full max-w-md mx-auto mb-4'>
      <div className='relative'>
        <Input
          type='text'
          placeholder='Поиск...'
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          className='w-full pr-10 focus-visible:ring-1'
        />
        <Search className='absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
      </div>

      {filteredItems.length > 0 && (
        <div className='absolute z-10 w-full mt-1 bg-background rounded-md border shadow-md max-h-60 overflow-auto'>
          <ul className='py-1'>
            {filteredItems.map((item, index) => (
              <li
                key={index}
                className={cn(
                  'px-3 py-2 cursor-pointer hover:bg-muted text-sm',
                  selectedItem === item && 'bg-muted',
                )}
                onClick={() => handleSelectItem(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
