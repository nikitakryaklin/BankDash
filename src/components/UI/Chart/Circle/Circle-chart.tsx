import { IChartCircle } from '@/types/Chart.interface'
import { useCircleChartData } from './useCircleChartData'

import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)

export const CircleChart = ({ chartData }: { chartData: IChartCircle }) => {
  const { data, options } = useCircleChartData({ ...chartData })
  return (
    <>
      {/* @ts-ignore */}
      <Doughnut data={data} options={options} />
    </>
  )
}
