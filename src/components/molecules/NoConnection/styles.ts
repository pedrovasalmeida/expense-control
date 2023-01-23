import { baseBoldText } from '@/styles/global'
import styled from 'styled-components/native'

export const Container = styled.View`
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.red};

  padding: 4px 0;
`

export const Text = styled.Text`
  ${baseBoldText}
  font-size: 14px;
`
