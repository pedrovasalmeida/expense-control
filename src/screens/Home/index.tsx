import { ExpenseTotalsResume } from '@/components/molecules/ExpenseTotalsResume'
import { ExpenseList } from '@/components/organisms/ExpenseList'

import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <ExpenseList title="Entradas" type="income" />
      <ExpenseList title="Saídas" type="outcome" />
      <ExpenseTotalsResume />
    </Container>
  )
}
