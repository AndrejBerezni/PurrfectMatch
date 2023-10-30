import { get } from 'lodash'
import { RootState } from '..'

export const getFullList = (store: RootState) =>
  get(store, 'search.fullList', [])
