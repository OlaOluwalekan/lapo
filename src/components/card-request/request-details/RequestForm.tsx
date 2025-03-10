import CardWrapper from '@/components/general/CardWrapper'
import RequestInput from './RequestInput'
import { format } from 'date-fns'
import clsx from 'clsx'
import RequestActions from './RequestActions'

interface CardDetailsProps {
  id: string
  branch: string
  type: string
  cardType: string
  quantity: string
  status: string
  initiator: string
  batch: string
  dateRequested: Date
  charges: string
}

const RequestForm = ({ cardDetails }: { cardDetails: CardDetailsProps }) => {
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
    <CardWrapper title='Card Request Details'>
      <div className='flex flex-col gap-5'>
        <div className='w-full flex flex-col gap-5 sm:grid sm:grid-cols-2 lg:gap-x-32'>
          <RequestInput
            type='text'
            id='branch'
            placeholder='Branch Name'
            value={cardDetails?.branch}
            label='Branch Name'
          />
          <RequestInput
            type='text'
            id='initiator'
            placeholder='Initiator'
            value={cardDetails?.initiator}
            label='Initiator'
          />
          <RequestInput
            type='text'
            id='cardType'
            placeholder='Card Type'
            value={cardDetails?.cardType}
            label='Card Type'
          />
          <RequestInput
            type='text'
            id='cardCharges'
            placeholder='Card Charges'
            value={cardDetails?.charges}
            label='Card Charges'
          />
          <RequestInput
            type='text'
            id='quantity'
            placeholder='Quantity'
            value={cardDetails?.quantity}
            label='Quantity'
          />
          <RequestInput
            type='text'
            id='batch'
            placeholder='Batch'
            value={cardDetails?.batch}
            label='Batch'
          />
          <div className='grid w-full items-center gap-1.5'>
            <span className='text-sm text-gray-dark'>Date Requested</span>
            <p>
              <span>{format(cardDetails.dateRequested, 'MM/dd/yyy')}</span>{' '}
              <span>{format(cardDetails.dateRequested, 'HH:mm:ss')}</span>
            </p>
          </div>
          <div className='grid w-full items-center gap-1.5'>
            <span className='text-sm text-gray-dark'>Status</span>
            <p
              className={clsx(
                'border-[1.5px] px-1.5 py-1 rounded-2xl w-fit',
                statusClass(cardDetails.status)
              )}
            >
              {cardDetails.status}
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-3'>
          <h4 className='text-sm text-dark-greyish-blue font-bold'>Actions</h4>
          <RequestActions />
        </div>
      </div>
    </CardWrapper>
  )
}

export default RequestForm
