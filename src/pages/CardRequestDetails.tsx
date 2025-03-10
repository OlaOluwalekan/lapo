import DetailsHeader from '@/components/card-request/request-details/DetailsHeader'
import RequestForm from '@/components/card-request/request-details/RequestForm'
import { recentCardRequestData } from '@/data/recentCardRequest'
import { useParams } from 'react-router'

const CardRequestDetails = () => {
  const params = useParams()
  const id = params.id
  const cardDetails = recentCardRequestData.find((data) => data.id === id)
  // console.log(cardDetails)

  return (
    <div className='w-full px-5 py-2 flex flex-col gap-3.5'>
      <DetailsHeader />
      <RequestForm cardDetails={cardDetails as any} />
    </div>
  )
}

export default CardRequestDetails
