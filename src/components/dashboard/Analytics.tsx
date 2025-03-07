import { analyticsData } from '@/data/analytics'
import CardWrapper from '../general/CardWrapper'
import { MdArrowOutward } from 'react-icons/md'
import { FaInfoCircle } from 'react-icons/fa'

const Analytics = () => {
  return (
    <div className='flex flex-col gap-2.5'>
      <div className='flex gap-2 items-center'>
        <h2 className='text-lg font-bold'>Analytics</h2>
        <div className='w-full h-[1px] bg-gray-light'></div>
      </div>

      <div className='flex flex-col gap-2 sm:grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
        {analyticsData.map((data) => {
          return (
            <CardWrapper key={data.id}>
              <div className='flex flex-col gap-3'>
                <div>
                  <img src={data.iconLink} alt={data.label} />
                  <h3 className='text-sm text-black/65'>{data.label}</h3>
                </div>

                <section className='flex items-center justify-between'>
                  <p className='text-2xl font-bold'>
                    {data.count || data.amount}
                  </p>
                  <section className='flex items-center gap-2'>
                    {data.percentage && (
                      <article className='flex gap-1 items-center text-sm bg-primary-green/10 px-1.5 py-0.5 rounded-sm text-primary-green'>
                        <MdArrowOutward className='text-sm' />
                        <span>{data.percentage}</span>
                      </article>
                    )}

                    {data.comparison && (
                      <p className='text-black/65 text-xs'>{data.comparison}</p>
                    )}

                    {data.message && (
                      <article className='flex items-center text-xs gap-2 text-orange'>
                        <FaInfoCircle />
                        <p>{data.message}</p>
                      </article>
                    )}
                  </section>
                </section>
              </div>
            </CardWrapper>
          )
        })}
      </div>
    </div>
  )
}

export default Analytics
