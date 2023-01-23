import { formatPrice } from '@/utils/handlePrice'
import { useMemo } from 'react'
import { ExpenseTotals, TotalText, TotalValue } from './styles'

export function ExpandTotals() {
  const totalValue = 599

  const isTotalValuePositive = useMemo(() => totalValue >= 0, [totalValue])

  return (
    <ExpenseTotals>
      <TotalText>Total líquido</TotalText>
      {isTotalValuePositive && <TotalValue isPositive={isTotalValuePositive}>+ {formatPrice(totalValue)} </TotalValue>}
      {!isTotalValuePositive && <TotalValue isPositive={isTotalValuePositive}>- {formatPrice(totalValue)} </TotalValue>}
    </ExpenseTotals>
  )
}
