import { chartConfig, insuranceData } from '@/data/insurance'
import CardWrapper from '../general/CardWrapper'
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '../ui/chart'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'

const Insurance = () => {
  return (
    <CardWrapper title='Monthly Insurance'>
      <ChartContainer config={chartConfig}>
        <BarChart accessibilityLayer data={insuranceData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey='month'
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis tickLine={false} tickMargin={10} axisLine={false} width={30} />
          <ChartTooltip content={<ChartTooltipContent hideLabel />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar
            dataKey='personalized'
            stackId='a'
            fill='#014DAF'
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey='instant'
            stackId='a'
            fill='#CCE2FF'
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ChartContainer>
    </CardWrapper>
  )
}

export default Insurance
