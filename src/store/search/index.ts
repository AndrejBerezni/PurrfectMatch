import { createSlice } from '@reduxjs/toolkit'
import { ICat } from '../../compiler/interfaces'

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
//wrtie apply filter function
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
      }
    },
    removeFilter: (state, action) => {
      if (state.filters.includes(action.payload)) {
        state.filters.splice(state.filters.indexOf(action.payload), 1)
      }
    },
    resetFilters: (state) => {
      state.filters = []
    },
  },
})

export const { setFullList, applyFilter, removeFilter, resetFilters } =
  searchSlice.actions

export default searchSlice.reducer
