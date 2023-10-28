import { createSlice } from '@reduxjs/toolkit'

const initialState: boolean = false

export const darkModeSlice = createSlice({
  name: 'dark mode',
  initialState,
  reducers: {
    switchDarkMode: (state) => !state,
  },
})

export const { switchDarkMode } = darkModeSlice.actions

export default darkModeSlice.reducer
