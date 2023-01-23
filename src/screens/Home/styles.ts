import { ScrollView } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
  flex: 1;
`
