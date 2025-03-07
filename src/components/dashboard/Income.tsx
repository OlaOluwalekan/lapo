import { chartConfig, incomeData } from '@/data/income'
import CardWrapper from '../general/CardWrapper'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '../ui/chart'
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'

const Income = () => {
  return (
    <CardWrapper title="This Week's Income">
      <ChartContainer config={chartConfig}>
        <LineChart
          accessibilityLayer
          data={incomeData}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey='day'
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis
            dataKey='income'
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            width={20}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey='income'
            type='natural'
            stroke='#4DAF01'
            strokeWidth={2}
            dot={false}
            className='drop-shadow-2xl'
          />
        </LineChart>
      </ChartContainer>
    </CardWrapper>
  )
}

export default Income
