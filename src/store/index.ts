import { configureStore } from '@reduxjs/toolkit'
import alertReducer from './alert/index.ts'
import authReducer from './authentication/index.ts'
import darkModeReducer from './darkMode/index.ts'

export const store = configureStore({
  reducer: {
    authentication: authReducer,
    darkMode: darkModeReducer,
    alert: alertReducer,
  },
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
