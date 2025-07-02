import { IChartBar } from '@/types/Chart.interface'

export const WEEKLY_ACTIVITY_DATA: IChartBar = {
  isTitle: false,
  isLegend: true,
  isGrid: true,
  labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  datasets: [
    {
      label: 'Expenses',
      data: [1, 2, 3, 4, 5, 6, 7].reverse(),
      backgroundColor: '#1814F3',
      borderRadius: 25,
      borderSkipped: false,
      borderWidth: 7,
      hoverBorderWidth: 6,
      borderColor: '#fff',
      hoverBackgroundColor: '#1814F3',
      hoverBorderColor: '#fff',
    },
    {
      label: 'Replenishments',
      data: [1, 2, 3, 4, 5, 6, 7],
      backgroundColor: '#16DBCC',
      borderRadius: 25,
      borderSkipped: false,
      borderWidth: 7,
      borderColor: '#fff',
      hoverBorderWidth: 6,
      hoverBackgroundColor: '#16DBCC',
    },
  ],
}
