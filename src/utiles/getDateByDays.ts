export const getDateByDays = (day: number) => {
  const date = new Date()
  date.setDate(date.getDate() - day)
  return date.toISOString()
}
