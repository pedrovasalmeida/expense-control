import { css } from 'styled-components/native'

export const baseRegularText = css`
  font-size: 16px;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.text};
  text-transform: lowercase;
`

export const baseBoldText = css`
  ${baseRegularText}
  font-weight: bold;
`
