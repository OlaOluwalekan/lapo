import { Button } from '@/components/ui/button'
import clsx from 'clsx'

const RequestActions = () => {
  return (
    <div>
      <Button className={clsx('px-3.5 py-2 flex gap-2 rounded-sm')}>
        <img src='/images/request-actions/download.svg' alt='download' />
        <span>Download for Production</span>
      </Button>
    </div>
  )
}

export default RequestActions
