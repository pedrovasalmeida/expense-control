import { ExpenseCard } from '@/components/molecules/ExpenseCard'
import { ExpenseListContainer, Title } from './styles'

interface ExpenseListProps {
  title: string
  type: 'income' | 'outcome'
}

const INCOME_DATA = [0, 1, 2]
const OUTCOME_DATA = [0, 1, 2, 3, 4, 5, 6, 7]

export function ExpenseList({ title, type }: ExpenseListProps) {
  const dataToRender = type === 'income' ? INCOME_DATA : OUTCOME_DATA

  return (
    <ExpenseListContainer>
      <Title>{title ?? 'Saídas'}</Title>

      {dataToRender?.map(item => (
        <ExpenseCard key={item} type={type} />
      ))}
    </ExpenseListContainer>
  )
}
