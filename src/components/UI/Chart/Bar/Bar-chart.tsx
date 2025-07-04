import { IChartBar } from '@/types/Chart.interface'
import { useBarChartData } from './useBarChartData'

import {
  Chart as ChartJS,
  CategoryScale,
  // LinearScale,
  LogarithmicScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { NotEnougtData } from '../../NotEnougtData/NotEnougtData'

ChartJS.register(
  CategoryScale,
  // LinearScale,
  LogarithmicScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)
export const BarChart = ({ chartData }: { chartData: IChartBar }) => {
  const { options, data } = useBarChartData({ ...chartData })

  if (chartData.labels.length === 0) {
    return <NotEnougtData />
  }
  return (
    <>
      {/* @ts-ignore */}
      <Bar options={options} data={data} />
    </>
  )
}
