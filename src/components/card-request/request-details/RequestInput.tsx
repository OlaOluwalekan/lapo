import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const RequestInput = ({
  type,
  id,
  placeholder,
  readOnly = true,
  value,
  label,
}: {
  type: string
  id: string
  placeholder: string
  readOnly?: boolean
  value?: string
  label?: string
}) => {
  return (
    <div className='grid w-full items-center gap-1.5'>
      <Label htmlFor={id} className='text-sm text-gray-dark'>
        {label}
      </Label>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        readOnly={readOnly}
        value={value}
        className='py-2.5 px-3.5 bg-gray-lighter text-black w-full'
      />
    </div>
  )
}

export default RequestInput
