export const useDateTranscript = (date_arg: Date) => {
  const date = new Date(date_arg)
  const isoDate = date.toISOString().split('T')[0]
  const day = date.toLocaleDateString('en-EN', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  })
  return { day, isoDate }
}
