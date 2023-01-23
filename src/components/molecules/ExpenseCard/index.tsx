import { Card, CardDate, CardInfo, CardName, CardValue, Checkbox } from './styles'

interface ExpenseCardProps {
  type: 'income' | 'outcome'
}

export function ExpenseCard({ type }: ExpenseCardProps) {
  return (
    <Card>
      <Checkbox />
      <CardInfo>
        <CardName>Lorem ipsum dolor sit amet consectetur adipisicing elit.</CardName>
        <CardDate>05 nov 2022</CardDate>
      </CardInfo>
      {type === 'income' && <CardValue type={type}>+ $ 875,99</CardValue>}
      {type === 'outcome' && <CardValue type={type}>- $ 928,99</CardValue>}
    </Card>
  )
}
