import { get } from 'lodash'
import { RootState } from '..'

export const getFullList = (store: RootState) =>
  get(store, 'search.fullList', [])

export const getFilteredList = (store: RootState) =>
  get(store, 'search.filteredList', [])

export const getFilters = (store: RootState) => get(store, 'search.filters', [])
