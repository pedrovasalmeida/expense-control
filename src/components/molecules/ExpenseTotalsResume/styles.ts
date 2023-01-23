import { baseBoldText, baseRegularText } from '@/styles/global'
import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 0 0 40px;
`

export const Title = styled.Text`
  ${baseBoldText}
  font-size: 18px;
  padding: 0 0 16px;
`

export const BoxContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 8px;
`

export const Text = styled.Text`
  ${baseRegularText}
`

export const Value = styled.Text`
  ${baseBoldText}
  text-transform: uppercase;
`
