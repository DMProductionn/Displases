import { configureStore } from '@reduxjs/toolkit'
import Filter from './Slices/Filter'
import Size  from './Slices/Size.slice'

export const store = configureStore({
  reducer: {
    Filter,
    Size
  },
})