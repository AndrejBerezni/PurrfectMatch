import { createSlice } from '@reduxjs/toolkit'
import { ICat } from '../../compiler/interfaces'
import { applyFilterToList } from '../../utilities/applyFilterToList'

interface ISearchState {
  fullList: ICat[]
  filteredList: ICat[]
  filters: string[]
}

const initialState: ISearchState = {
  fullList: [],
  filteredList: [],
  filters: [],
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setFullList: (state, action) => {
      state.fullList = action.payload
    },
    applyFilter: (state, action) => {
      if (!state.filters.includes(action.payload)) {
        state.filters.push(action.payload)
        state.filteredList = applyFilterToList(state.fullList, state.filters)
      }
    },
    removeFilter: (state, action) => {
      if (state.filters.includes(action.payload)) {
        state.filters.splice(state.filters.indexOf(action.payload), 1)
        state.filteredList =
          state.filters.length === 0
            ? state.fullList
            : applyFilterToList(state.fullList, state.filters)
      }
    },
    resetFilters: (state) => {
      state.filters = []
      state.filteredList = state.fullList
    },
  },
})

export const { setFullList, applyFilter, removeFilter, resetFilters } =
  searchSlice.actions

export default searchSlice.reducer
