import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authentication/index.ts'

export const store = configureStore({
  reducer: {
    authentication: authReducer,
  },
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
