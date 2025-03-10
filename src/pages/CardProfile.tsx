import { setPage } from '@/store/generalSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const CardProfile = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPage('card-profile'))
  }, [])

  return (
    <div className='w-full px-5 py-2 flex flex-col gap-3.5 overflow-x-hidden'>
      CardProfile
    </div>
  )
}

export default CardProfile
