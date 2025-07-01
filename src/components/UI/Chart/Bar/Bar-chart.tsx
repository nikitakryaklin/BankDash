import { IChartBar } from '@/types/Chart.interface'
import { useBarChartData } from './useBarChartData'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
export const BarChart = ({ chartData }: { chartData: IChartBar }) => {
  const { options, data } = useBarChartData({ ...chartData })

  return (
    <>
      {/* @ts-ignore */}
      <Bar options={options} data={data} />
    </>
  )
}
