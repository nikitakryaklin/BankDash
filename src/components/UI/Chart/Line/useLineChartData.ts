import { IChartLine } from '@/types/Chart.interface'
import { getCardValues } from '@/utiles/getCardValues'
import { getToolTip } from '@/utiles/getToolTip'
import { callback } from 'chart.js/helpers'
//

export function useLineChartData(DATA: IChartLine) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      line: {
        tension: DATA.scale, //  scale
      },
    },
    scales: {
      x: {
        border: {
          display: false,
        },
        grid: {
          display: DATA.XGrid, // XGrid
        },
        ticks: {
          color: '#718ebf',
          autoSkip: true,
          maxTicksLimit: 7,
          drawTicks: false,
          // @ts-ignore
          // callback(value, index, ticks) {
          //   // @ts-ignore
          //   const label = this.getLabelForValue(value)
          //   // @ts-ignore
          //   return index === this.chart.data.labels.indexOf(label) ? label : ''
          // },
        },
      },
      y: {
        beginAtZero: true,
        border: {
          display: false,
          dash: [3, 3],
        },
        ticks: {
          drawTicks: true,
          color: '#718ebf',
          padding: 15,
          maxTicksLimit: 5,
          callback: function (value: any) {
            return '$' + getCardValues.balance(value)
          },
        },
        grid: {
          color: '#718ebf7a',
          drawBorder: true,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      ...getToolTip(),
    },
  }

  const data = {
    labels: DATA.labes,
    datasets: [
      {
        label: DATA.label,
        data: DATA.data,
        borderColor: DATA.borderColor,
        borderWidth: 3, // 3
        pointBorderWidth: DATA.pointBorderWidth, // 2
        pointRadius: DATA.pointRadius, // 5
        pointBackgroundColor: '#fff', // #fff
      },
    ],
  }
  return { data, options }
}
