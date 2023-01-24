import { generateMonthListUntilYear } from '@/hooks/useCalendar'
import { CalendarState } from '@/interfaces/Calendar'
import { createSlice } from '@reduxjs/toolkit'
import { reducers } from './reducers'

const initialState: CalendarState = {
  dates: generateMonthListUntilYear(2028),
}

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers,
})

export const {} = calendarSlice.actions

export default calendarSlice.reducer
