import { IChartLine } from '@/types/Chart.interface'
import { useLineChartData } from './useLineChartData'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { shadowLinePlugin } from '@/utiles/shadowLinePlugin'
import { NotEnougtData } from '../../NotEnougtData/NotEnougtData'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const LineChart = ({
  chartData,
  isPlugin = false,
}: {
  chartData: IChartLine
  isPlugin?: boolean
}) => {
  const { data, options } = useLineChartData({ ...chartData })
  console.log(chartData.labes, 'line')

  if (chartData.labes.length === 0) {
    return <NotEnougtData />
  }
  return (
    <>
      <Line
        options={options}
        data={data}
        plugins={isPlugin ? [shadowLinePlugin] : []}
      />
    </>
  )
}
