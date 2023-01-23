import { formatPrice } from '@/utils/handlePrice'
import { BoxContainer, Container, Text, Title, Value } from './styles'

export function ExpenseTotalsResume() {
  const total = 599.99

  return (
    <Container>
      <Title>Resumo</Title>

      <BoxContainer>
        <Text>Entradas</Text>
        <Value>+ {formatPrice(total)}</Value>
      </BoxContainer>

      <BoxContainer>
        <Text>Saídas</Text>
        <Value>- {formatPrice(total)}</Value>
      </BoxContainer>
    </Container>
  )
}
