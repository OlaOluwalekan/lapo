import { recentCardRequestData } from '@/data/recentCardRequest'
import CardWrapper from '../general/CardWrapper'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'
import clsx from 'clsx'

const statusClass = (status: string) => {
  return clsx({
    'text-success-green bg-success-green/10 border-success-green/30':
      status === 'Ready',
    'text-orange bg-orange/10 border-orange/30': status === 'In Progress',
    'text-primary-blue bg-primary-blue/10 border-primary-blue/30':
      status === 'Acknowledged',
    'text-blackish bg-blackish/10 border-blackish/30': status === 'Pending',
  })
}

const RecentCardRequest = () => {
  return (
    <CardWrapper title='Recent Card Request'>
      <Table className='text-xs overflow-auto'>
        <TableHeader className='bg-alice'>
          <TableRow>
            <TableHead className='text-blackish/60 font-semibold text-center'>
              Branch
            </TableHead>
            <TableHead className='text-blackish/60 font-semibold text-center'>
              Card Type
            </TableHead>
            <TableHead className='text-blackish/60 font-semibold text-center'>
              Quantity
            </TableHead>
            <TableHead className='text-blackish/60 font-semibold text-center'>
              Status
            </TableHead>
            <TableHead className='text-blackish/60 font-semibold text-center'>
              Action
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {recentCardRequestData.map((data) => {
            return (
              <TableRow key={data.id} className='text-center'>
                <TableCell className='py-3'>{data.branch}</TableCell>
                <TableCell>{data.type}</TableCell>
                <TableCell>{data.quantity}</TableCell>
                <TableCell>
                  <span
                    className={clsx(
                      'border-[1.5px] px-1.5 py-1 rounded-2xl',
                      statusClass(data.status)
                    )}
                  >
                    {data.status}
                  </span>
                </TableCell>
                <TableCell>
                  <button className='text-primary-blue text-xs text-center'>
                    View
                  </button>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </CardWrapper>
  )
}

export default RecentCardRequest
