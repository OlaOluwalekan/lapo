import { useMemo } from 'react'
import CardWrapper from '../general/CardWrapper'
import { cardStatusDistributionData, chartConfig } from '@/data/cardStatus'
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '../ui/chart'
import { Label, Pie, PieChart } from 'recharts'

const CardStatusDistribution = () => {
  const totalCards = useMemo(() => {
    return cardStatusDistributionData.reduce((acc, curr) => acc + curr.count, 0)
  }, [])

  return (
    <CardWrapper title='Card Status Distribution'>
      <ChartContainer
        config={chartConfig}
        className='mx-auto aspect-square max-h-[300px]'
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={cardStatusDistributionData}
            dataKey='count'
            nameKey='type'
            innerRadius={110}
            outerRadius={120}
            strokeWidth={5}
            paddingAngle={2}
            cornerRadius={10}
            startAngle={90}
            endAngle={450}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor='middle'
                      dominantBaseline='middle'
                    >
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className='fill-muted-foreground'
                      >
                        Total cards
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className='fill-foreground text-3xl font-bold'
                      >
                        {totalCards.toLocaleString()}
                      </tspan>
                    </text>
                  )
                }
              }}
            />
          </Pie>
          <ChartLegend content={<ChartLegendContent />} />
        </PieChart>
      </ChartContainer>
    </CardWrapper>
  )
}

export default CardStatusDistribution
