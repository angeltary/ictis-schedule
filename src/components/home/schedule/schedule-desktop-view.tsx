'use client'

import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { getFormattedDate } from '@/lib/utils/get-formatted-date'
import { cn } from '@/lib/utils/tailwind-merge'

type Props = {
  headers: string[][]
  scheduleData: string[][]
}

export default function ScheduleDesktopView({ headers, scheduleData }: Props) {
  return (
    <Table className='border-collapse w-full table-fixed'>
      <TableBody>
        <TableRow>
          {headers[0].map((item, index) => (
            <TableCell
              key={index}
              className={cn(
                'border text-center hover:bg-muted/50 transition-colors',
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
                'border text-center hover:bg-muted/50 transition-colors',
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
                  'border text-center whitespace-normal py-4 hover:bg-muted/50 transition-colors',
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
