'use client'

import { Search } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Input } from '@/components/ui/input'

import { useItems } from '@/hooks/use-items'

import { cn } from '@/lib/utils/tailwind-merge'

import { useSelectedItemStore } from '@/stores/selected-item-store'

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
    <div className='relative mx-auto mb-4 w-full max-w-md'>
      <div className='relative'>
        <Input
          type='text'
          placeholder='Поиск...'
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          className='w-full pr-10 focus-visible:ring-1'
        />
        <Search className='text-muted-foreground absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2' />
      </div>

      {filteredItems.length > 0 && (
        <div className='bg-background absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border shadow-md'>
          <ul className='py-1'>
            {filteredItems.map((item, index) => (
              <li
                key={index}
                className={cn(
                  'hover:bg-muted cursor-pointer px-3 py-2 text-sm',
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
