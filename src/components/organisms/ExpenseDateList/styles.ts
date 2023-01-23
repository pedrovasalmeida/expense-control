import { baseBoldText } from '@/styles/global'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;

  padding: 8px 0 16px;
`

interface DateContainerProps {
  isSelected: boolean
}

export const DateContainer = styled.View<DateContainerProps>`
  align-items: center;
  justify-content: center;
  gap: 4px;
  border: 1px solid ${({ theme, isSelected }) => (isSelected ? theme.colors.yellow : theme.colors.gray)};
  border-radius: 8px;
  padding: 8px;
`

export const Divider = styled.View`
  width: 16px;
  height: 100%;
`

export const Text = styled.Text`
  ${baseBoldText}
  font-size: 12px;
`

export const DateText = styled.Text`
  ${baseBoldText}
  color: ${({ theme }) => theme.colors.gray};
  font-size: 10px;
`
