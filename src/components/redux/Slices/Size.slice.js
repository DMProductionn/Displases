import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sizeBtn: false,
}

export const Size = createSlice({
  name: 'Size',
  initialState,
  reducers: {
    setSize: (state) => {
      state.sizeBtn = !state.sizeBtn
    }
  },
})


export const { setSize } = Size.actions

export default Size.reducer