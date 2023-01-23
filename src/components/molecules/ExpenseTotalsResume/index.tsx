import { BoxContainer, Container, Text, Title, Value } from './styles'

export function ExpenseTotalsResume() {
  return (
    <Container>
      <Title>Resumo</Title>

      <BoxContainer>
        <Text>Entradas</Text>
        <Value>$ 999,99</Value>
      </BoxContainer>

      <BoxContainer>
        <Text>Saídas</Text>
        <Value>$ 999,99</Value>
      </BoxContainer>
    </Container>
  )
}
