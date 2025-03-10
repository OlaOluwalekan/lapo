import Analytics from '@/components/dashboard/Analytics'
import CardStatusDistribution from '@/components/dashboard/CardStatusDistribution'
import Income from '@/components/dashboard/Income'
import Insurance from '@/components/dashboard/Insurance'
import Intro from '@/components/dashboard/Intro'
import QuickAccess from '@/components/dashboard/QuickAccess'
import RecentCardRequest from '@/components/dashboard/RecentCardRequest'
import { setPage } from '@/store/generalSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const Dashboard = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPage('dashboard'))
  }, [])

  return (
    <div className='w-full px-5 py-2 flex flex-col gap-3.5'>
      <Intro />
      <QuickAccess />
      <Analytics />
      <div className='flex flex-col gap-2 lg:grid lg:grid-cols-2'>
        <div className='flex flex-col gap-2'>
          <Insurance />
          <Income />
        </div>

        <div className='flex flex-col gap-2 mb-10'>
          <RecentCardRequest />
          <CardStatusDistribution />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
