import { recentCardRequestData } from '@/data/recentCardRequest'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'
import clsx from 'clsx'
import { format } from 'date-fns'
import { Link } from 'react-router'

const RequestTable = () => {
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

  return (
    <div className='w-full'>
      <Table className='text-xs overflow-auto border-collapse border text-gray-dark'>
        <TableHeader className='bg-alice'>
          <TableRow>
            <TableHead className='text-blackish/60 font-semibold border-r min-w-[200px]'>
              Branch
            </TableHead>
            <TableHead className='text-blackish/60 font-semibold text-center border-r min-w-[150px]'>
              Initiator
            </TableHead>
            <TableHead className='text-blackish/60 font-semibold text-center border-r min-w-[100px]'>
              Quantity
            </TableHead>
            <TableHead className='text-blackish/60 font-semibold text-center border-r min-w-[100px]'>
              Batch
            </TableHead>
            <TableHead className='text-blackish/60 font-semibold text-center border-r min-w-[200px]'>
              Date Requested
            </TableHead>
            <TableHead className='text-blackish/60 font-semibold text-center border-r min-w-[200px]'>
              Status
            </TableHead>
            <TableHead className='text-blackish/60 font-semibold text-center border-r min-w-[100px]'>
              Action
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {recentCardRequestData.map((data) => {
            return (
              <TableRow key={data.id} className='text-center'>
                <TableCell className='py-3 text-left border-r'>
                  {data.branch}
                </TableCell>
                <TableCell className='border-r'>{data.initiator}</TableCell>
                <TableCell className='border-r'>{data.quantity}</TableCell>
                <TableCell className='border-r'>{data.batch}</TableCell>
                <TableCell className='border-r'>
                  <span>{format(data.dateRequested, 'MM/dd/yyy')}</span>{' '}
                  <span>{format(data.dateRequested, 'HH:mm:ss')}</span>
                </TableCell>
                <TableCell className='border-r'>
                  <span
                    className={clsx(
                      'border-[1.5px] px-1.5 py-1 rounded-2xl',
                      statusClass(data.status)
                    )}
                  >
                    {data.status}
                  </span>
                </TableCell>
                <TableCell className='border-r'>
                  <Link
                    to={`/dashboard/card-request/${data.id}`}
                    className='text-primary-blue text-xs text-center'
                  >
                    View
                  </Link>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}

export default RequestTable
