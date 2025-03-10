import CardRequestHeader from '@/components/card-request/CardRequestHeader'
import CardRequestSearch from '@/components/card-request/CardRequestSearch'
import RequestTable from '@/components/card-request/RequestTable'
import { setPage } from '@/store/generalSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const CardRequest = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPage('card-request'))
  }, [])

  return (
    <div className='w-full px-5 py-2 flex flex-col gap-3.5'>
      <CardRequestHeader />
      <CardRequestSearch />
      <RequestTable />
    </div>
  )
}

export default CardRequest
