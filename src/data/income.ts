import { ChartConfig } from '@/components/ui/chart'

export const incomeData = [
  { day: 'Mon', income: 52 },
  { day: 'Tue', income: 20 },
  { day: 'Wed', income: 38 },
  { day: 'Thu', income: 36 },
  { day: 'Fri', income: 58 },
  { day: 'Sat', income: 24 },
  { day: 'Sun', income: 78 },
]

export const chartConfig = {
  desktop: {
    label: 'Income',
    color: '#4DAF01',
  },
} satisfies ChartConfig
