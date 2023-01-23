import { months } from '@/utils/constants/months'
import { useState } from 'react'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { Container, DateContainer, DateText, Divider, Text } from './styles'

export function ExpenseDateList() {
  const [selectedMonth, setSelectedMonth] = useState('jan')

  const handleSelectMonth = (month: string) => {
    setSelectedMonth(month)
  }

  const renderDividerComponent = () => <Divider />

  const renderItems = ({ item }: any) => (
    <TouchableOpacity key={item.id} onPress={() => handleSelectMonth(item.id)}>
      <DateContainer key={item.id} isSelected={selectedMonth === item.id}>
        <Text>{item.id}</Text>
        <DateText>{new Date().getFullYear()}</DateText>
      </DateContainer>
    </TouchableOpacity>
  )

  return (
    <Container>
      <FlatList
        data={months}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={renderDividerComponent}
        keyExtractor={item => item.id}
        renderItem={renderItems}
      />
    </Container>
  )
}
