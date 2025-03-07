import { ChartConfig } from '@/components/ui/chart'

export const insuranceData = [
  { month: 'May', personalized: 10, instant: 52 },
  { month: 'Jun', personalized: 20, instant: 70 },
  { month: 'Jul', personalized: 7, instant: 30 },
  { month: 'Aug', personalized: 8, instant: 60 },
  { month: 'Sep', personalized: 10, instant: 50 },
  { month: 'Oct', personalized: 19, instant: 83 },
  { month: 'Nov', personalized: 9, instant: 74 },
]

export const chartConfig = {
  personalized: {
    label: 'Personalized',
    color: '#014DAF',
  },
  instant: {
    label: 'Instant',
    color: '#CCE2FF',
  },
} satisfies ChartConfig
