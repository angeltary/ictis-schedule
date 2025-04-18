'use client'

import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { cn, getFormattedDate } from '@/lib'

interface Props {
  headers: string[][]
  scheduleData: string[][]
}

export default function ScheduleDesktopView({ headers, scheduleData }: Props) {
  return (
    <Table className='w-full table-fixed border-collapse'>
      <TableBody>
        <TableRow>
          {headers[0].map((item, index) => (
            <TableCell
              key={index}
              className={cn(
                'border text-center break-words transition-colors',
                index === 0 && 'font-bold',
              )}
            >
              {item}
            </TableCell>
          ))}
        </TableRow>

        <TableRow>
          {headers[1].map((item, index) => (
            <TableCell
              key={index}
              className={cn(
                'border text-center break-words transition-colors',
                index === 0 && 'font-bold',
              )}
            >
              {item}
            </TableCell>
          ))}
        </TableRow>

        {scheduleData.map((row, index) => (
          <TableRow key={index} className='h-48'>
            {row.map((item, index) => (
              <TableCell
                key={index}
                className={cn(
                  'border py-4 text-center break-words whitespace-normal transition-colors',
                  index === 0 && 'font-bold',
                )}
              >
                {index === 0 ? getFormattedDate(item) : item}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
