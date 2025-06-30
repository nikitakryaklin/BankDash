import { IChartBar } from '@/types/Chart.interface'

export const DEBIT_AND_CREDIT_DATA: IChartBar = {
  isTitle: false,
  isLegend: true,
  isGrid: false,
  title: '$7,560 Debited & $5,420 Credited in this Week',
  labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  datasets: [
    {
      label: 'Dataset 2',
      data: [4, 3, 5, 4, 5, 6, 3].reverse(),
      backgroundColor: '#1A16F3',
      borderRadius: 14,
      borderSkipped: false,
      borderWidth: 4,
      borderColor: '#fff',
      hoverBorderColor: '#EDF0F7',
    },
    {
      label: 'Dataset 2',
      data: [4, 3, 5, 4, 5, 6, 3],
      backgroundColor: '#FCAA0B',
      borderRadius: 14,
      borderSkipped: false,
      borderWidth: 4,
      borderColor: '#fff',
      hoverBorderColor: '#EDF0F7',
    },
  ],
}
