import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import alertReducer from './alert/index.ts'
import authReducer from './authentication/index.ts'
import darkModeReducer from './darkMode/index.ts'
import searchReducer from './search/index.ts'

const reducers = combineReducers({
  authentication: authReducer,
  darkMode: darkModeReducer,
  alert: alertReducer,
  search: searchReducer,
})

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage,
  },
  reducers
)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
