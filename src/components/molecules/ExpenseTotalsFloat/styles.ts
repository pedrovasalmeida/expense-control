import styled from 'styled-components/native'
import { baseBoldText, baseRegularText } from '@/styles/global'
import { BlurView } from '@react-native-community/blur'

export const ExpenseTotals = styled(BlurView).attrs({
  blurType: 'dark',
  blurAmount: 2,
})`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  padding: 16px 16px 32px;
  border: 0px solid ${({ theme }) => theme.colors.gray};
  border-top-width: 1px;
`

export const TotalText = styled.Text`
  ${baseRegularText}
`

interface TotalValueProps {
  isPositive: boolean
}

export const TotalValue = styled.Text<TotalValueProps>`
  ${baseBoldText}
  color: ${({ theme, isPositive }) => (isPositive ? theme.colors.green : theme.colors.red)};
  text-transform: uppercase;
`
