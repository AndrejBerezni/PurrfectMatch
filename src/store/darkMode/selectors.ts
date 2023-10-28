import { get } from 'lodash'
import { RootState } from '..'

export const getDarkMode = (store: RootState) => get(store, 'darkMode', false)
