import { IChartBar } from '@/types/Chart.interface'
import { getToolTip } from '@/utiles/getToolTip'

export function useBarChartData(DATA: IChartBar) {
  // DATA = DATA.chartData

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: DATA.isTitle, // title
        text: DATA.title,
      },
      legend: {
        display: DATA.isLegend, // legend
        position: 'top',
        align: 'end',
        labels: {
          color: '#718ebf',
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 10,
        },
      },
      ...getToolTip(),
    },
    scales: {
      x: {
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
        ticks: {
          color: '#718ebf',
          maxTicksLimit: 7,
          drawTicks: false,
        },
      },
      y: {
        beginAtZero: true,
        border: {
          display: false,
        },
        ticks: {
          display: DATA.isGrid, // grid
          drawTicks: true,
          color: '#718ebf',
          padding: 15,
          maxTicksLimit: 5,
        },
        grid: {
          display: DATA.isGrid, // grid
          color: '#F3F3F5',
          drawBorder: true,
        },
      },
    },
  }
  const data = {
    labels: DATA.labels,
    datasets: DATA.datasets,
  }

  return { options, data }
}
