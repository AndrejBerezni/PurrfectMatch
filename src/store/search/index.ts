import { createSlice } from '@reduxjs/toolkit'
import { ICat } from '../../compiler/interfaces'

interface ISearchState {
  fullList: ICat[]
  filteredList: ICat[]
  characterFilter: string[]
  specialFilter: string[]
}

const initialState: ISearchState = {
  fullList: [],
  filteredList: [],
  characterFilter: [],
  specialFilter: [],
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setFullList: (state, action) => {
      state.fullList = action.payload
    },
  },
})

export const { setFullList } = searchSlice.actions

export default searchSlice.reducer
