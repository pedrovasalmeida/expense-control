import { Calendar } from '@/interfaces/Calendar'
import { eachMonthOfInterval } from 'date-fns'

export function getUtilInfoFromDate(date: Date): Calendar {
  // const id = uuidv4()
  const month = date?.getMonth() + 1
  const monthName = date.toLocaleDateString('pt-BR', { month: 'long' })
  const monthShortName = date.toLocaleDateString('pt-BR', { month: 'short' }).replace('.', '')
  const year = date.getFullYear()
  const fullDate = date.toLocaleDateString('pt-BR', {
    month: 'long',
    year: 'numeric',
  })

  return { month, year, monthName, monthShortName, fullDate }
}

export function generateMonthListUntilYear(yearLimit = 2023) {
  const start = new Date()
  const end = new Date(yearLimit, 11, 31)

  const interval = eachMonthOfInterval({ start, end })

  const monthList = interval.map(date => getUtilInfoFromDate(date))

  return monthList
}
