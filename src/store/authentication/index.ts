import { createSlice } from '@reduxjs/toolkit'

interface IAuthState {
  isAuth: boolean
  user: string
}

const initialState: IAuthState = {
  isAuth: false,
  user: '',
}

export const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.isAuth = true
      state.user = action.payload
    },
    signOut: () => initialState,
  },
})

export const { signIn, signOut } = authSlice.actions

export default authSlice.reducer
