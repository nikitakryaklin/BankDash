import { IChartCircle } from '@/types/Chart.interface'
import { getToolTip } from '@/utiles/getToolTip'

export function useCircleChartData(DATA: IChartCircle) {
  const data = {
    labels: DATA.labels,
    datasets: [
      {
        label: DATA.label,
        data: DATA.datasets,
        backgroundColor: DATA.backgroundColor,
        borderWidth: DATA.border,
      },
    ],
  }

  const options = {
    layout: {
      padding: 0,
    },
    cutout: DATA.cutout,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          color: '#718ebf',
          usePointStyle: true,
          pointStyle: 'circle',
          padding: DATA.padding,
        },
        align: 'center',
      },
      ...getToolTip(),
    },
  }

  return { options, data }
}
