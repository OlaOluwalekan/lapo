import { ChartConfig } from '@/components/ui/chart'

export const cardStatusDistributionData = [
  { type: 'active', count: 1838, fill: '#01A4AF' },
  { type: 'inactive', count: 147, fill: '#014DAF' },
  { type: 'blocked', count: 98, fill: '#8020E7' },
  { type: 'lost', count: 73, fill: '#FF4457' },
  { type: 'expired', count: 294, fill: '#FFBA24' },
]

export const chartConfig = {
  count: {
    label: 'Cards',
  },
  active: {
    label: 'Active',
    color: '#01A4AF',
  },
  inactive: {
    label: 'Inactive',
    color: '#014DAF',
  },
  blocked: {
    label: 'Blocked',
    color: '#8020E7',
  },
  lost: {
    label: 'Lost',
    color: '#FF4457',
  },
  expired: {
    label: 'Expired',
    color: '#FFBA24',
  },
} satisfies ChartConfig
