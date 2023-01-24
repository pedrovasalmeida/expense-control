export interface Calendar {
  // id: string
  month: number
  year: number
  monthName: string
  monthShortName: string
  fullDate: string
}

export interface CalendarState {
  dates: Calendar[]
}
