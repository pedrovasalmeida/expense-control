import { configureStore } from '@reduxjs/toolkit'
import calendar from './calendar'

export const store = configureStore({
  reducer: {
    calendar,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
