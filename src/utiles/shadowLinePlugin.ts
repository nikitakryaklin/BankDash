export const shadowLinePlugin = {
  id: 'shadowLine',
  beforeDatasetsDraw(chart: { ctx: any }) {
    const { ctx } = chart

    ctx.save()

    ctx.shadowColor = '#1814F3'
    ctx.shadowBlur = 60
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 30
  },
  afterDatasetsDraw(chart: { ctx: { restore: () => void } }) {
    chart.ctx.restore()
  },
}
