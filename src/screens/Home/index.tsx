import { ExpenseTotalsResume } from '@/components/molecules/ExpenseTotalsResume'
import { ExpenseDateList } from '@/components/organisms/ExpenseDateList'
import { ExpenseList } from '@/components/organisms/ExpenseList'

import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <ExpenseDateList />
      <ExpenseList title="Entradas" type="income" />
      <ExpenseList title="Saídas" type="outcome" />
      <ExpenseTotalsResume />
    </Container>
  )
}
