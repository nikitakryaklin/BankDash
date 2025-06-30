export interface IChartLine {
  scale: number
  XGrid: boolean
  labes: string[]
  label: string
  data: number[]
  borderColor: string
  pointBorderWidth: number
  pointRadius: number
}

export interface IChartBar {
  isTitle: boolean
  title?: string
  isLegend: boolean
  isGrid: boolean
  labels: string[]
  datasets: any
}

export interface IChartCircle {
  labels: string[]
  datasets: number[]
  backgroundColor: string[]
  border: number
  cutout: string
  label: string
  padding: number
}
