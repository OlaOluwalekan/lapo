import { generateRandomDate } from '@/lib/helper'
import { format } from 'date-fns'
import { CiCalendar } from 'react-icons/ci'

const Intro = () => {
  const user = 'Nazeer'

  const lastLogin = generateRandomDate()

  return (
    <div className='flex flex-col-reverse text-blackish md:flex-row md:justify-between'>
      <div>
        <h3 className='text-lg font-bold'>
          Hi {user}, what would you like to do today?
        </h3>

        <article className='flex gap-1 text-xs'>
          <span className='font-medium'>Last Login:</span>
          <article className='flex gap-2'>
            <span>{format(lastLogin, 'dd/MM/yyy')}</span>
            <span>{format(lastLogin, 'HH:mm:ss')}</span>
          </article>
        </article>
      </div>

      <div className='flex items-center'>
        <article className='flex items-center gap-2 px-3 py-2 border-[1px] rounded-sm text-xs'>
          <article className='flex items-center gap-1'>
            <CiCalendar className='text-lg' />
            Today
          </article>{' '}
          |<span>{format(new Date(), 'dd MMM yyyy')}</span>
        </article>
      </div>
    </div>
  )
}

export default Intro
