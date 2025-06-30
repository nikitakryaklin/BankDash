export interface ITransaction {
  title: string
  id: number
  category: string
  card: { number: string }
  date: Date
  amount: string
  type: string
}
