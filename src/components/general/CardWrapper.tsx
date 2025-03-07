import { ReactNode } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

const CardWrapper = ({
  children,
  title,
}: {
  children: ReactNode
  title?: string
}) => {
  return (
    <Card className='p-4 rounded-[10px]'>
      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent>{children}</CardContent>
    </Card>
  )
}

export default CardWrapper
