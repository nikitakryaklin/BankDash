import { IChartBar } from '@/types/Chart.interface'

export const MY_EXPENSE_DATA: IChartBar = {
  isTitle: false,
  isLegend: false,
  isGrid: false,
  labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  datasets: [
    {
      label: 'Dataset 2',
      data: [4, 3, 5, 4, 5, 6, 3],
      backgroundColor: '#EDF0F7',
      borderRadius: 10,
      borderSkipped: false,
      borderWidth: 7,
      borderColor: '#EDF0F7',
      hoverBorderWidth: 6,
      hoverBackgroundColor: '#16DBCC',
      hoverBorderColor: '#16DBCC',
    },
  ],
}
