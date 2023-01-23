import styled from 'styled-components/native'

export const Container = styled.View`
  height: 1px;
  width: 100%;

  margin: 4px 0;

  background-color: ${({ theme }) => theme.colors.gray};
  opacity: 0.3;
`
