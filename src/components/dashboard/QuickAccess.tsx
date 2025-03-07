import { quickAccessData } from '@/data/quickAccess'
import CardWrapper from '../general/CardWrapper'
import { Link } from 'react-router'
import { GoChevronRight } from 'react-icons/go'

const QuickAccess = () => {
  return (
    <CardWrapper title='Quick Access'>
      <div className='flex gap-2 flex-wrap sm:grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
        {quickAccessData.map((data) => {
          return (
            <Link
              to={data.href}
              key={data.id}
              className='flex items-center w-full gap-4 px-4 py-2  bg-alice rounded-sm'
            >
              <article className='bg-primary-blue inline-flex items-center rounded-full w-7 aspect-square justify-center'>
                <img src={data.iconLink} alt={data.label} />
              </article>
              <h3 className='text-sm'>{data.label}</h3>
              <GoChevronRight className='text-gray-dark' />
            </Link>
          )
        })}
      </div>
    </CardWrapper>
  )
}

export default QuickAccess
