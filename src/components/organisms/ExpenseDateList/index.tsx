import { Calendar } from '@/interfaces/Calendar'
import { RootState } from '@/store'
import { useState } from 'react'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import { Container, DateContainer, DateText, Divider, Text } from './styles'

interface ItemToRender {
  item: Calendar
}

export function ExpenseDateList() {
  const { dates } = useSelector((state: RootState) => state.calendar)
  const [selectedMonth, setSelectedMonth] = useState(dates[0].fullDate)

  const handleSelectMonth = (month: string) => {
    setSelectedMonth(month)
  }

  const renderDividerComponent = () => <Divider />

  const renderItems = ({ item }: ItemToRender) => (
    <TouchableOpacity onPress={() => handleSelectMonth(item.fullDate)}>
      <DateContainer isSelected={selectedMonth === item.fullDate}>
        <Text>{item.monthShortName}</Text>
        <DateText>{item.year}</DateText>
      </DateContainer>
    </TouchableOpacity>
  )

  return (
    <Container>
      <FlatList
        data={dates}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={renderDividerComponent}
        keyExtractor={item => item.fullDate}
        renderItem={renderItems}
        maxToRenderPerBatch={6}
        initialNumToRender={6}
      />
    </Container>
  )
}
