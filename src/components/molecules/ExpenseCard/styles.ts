import { baseBoldText, baseRegularText } from '@/styles/global'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import styled from 'styled-components/native'

export const Card = styled.View`
  flex-direction: row;
  align-items: center;

  width: 100%;
  padding: 8px;

  border-radius: 8px;
`

export const Checkbox = styled(BouncyCheckbox).attrs(({ theme }) => ({
  size: 30,
  fillColor: theme.colors.blue,
}))``

export const CardInfo = styled.View`
  max-width: 50%;
  flex-grow: 1;
`

export const CardName = styled.Text.attrs({
  numberOfLines: 1,
})`
  ${baseRegularText}
  width: 100%;
`

export const CardDate = styled.Text`
  ${baseRegularText}
  color: ${({ theme }) => theme.colors.gray};
  font-size: 12px;
  max-width: 100px;

  padding: 8px 0 0;
`

interface CardValueProps {
  type: 'income' | 'outcome'
}

export const CardValue = styled.Text<CardValueProps>`
  ${baseBoldText}
  color: ${({ theme, type }) => (type === 'income' ? theme.colors.green : theme.colors.red)};

  margin-left: auto;
`
