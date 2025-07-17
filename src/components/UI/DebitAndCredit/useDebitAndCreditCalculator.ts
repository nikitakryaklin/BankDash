import { useStatistics } from '@/context/statsContext/statsContext'
import { useMemo } from 'react'

export const useDebitAndCreditCalculator = () => {
  const {
    debitAndCredit: { labels, debit, credit },
  } = useStatistics()

  const DEBIT_AND_CREDIT_DATA = useMemo(() => {
    return {
      isTitle: false,
      isLegend: true,
      isGrid: false,
      title: '$7,560 Debited & $5,420 Credited in this Week',
      labels: labels,
      datasets: [
        {
          label: 'Debit',
          data: debit,
          backgroundColor: '#1A16F3',
          borderRadius: 14,
          borderSkipped: false,
          borderWidth: 4,
          borderColor: '#fff',
          hoverBorderColor: '#EDF0F7',
        },
        {
          label: 'Credit',
          data: credit,
          backgroundColor: '#FCAA0B',
          borderRadius: 14,
          borderSkipped: false,
          borderWidth: 4,
          borderColor: '#fff',
          hoverBorderColor: '#EDF0F7',
        },
      ],
    }
  }, [labels, debit, credit])
  return { DEBIT_AND_CREDIT_DATA }
}
