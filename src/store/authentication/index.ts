import { createSlice } from '@reduxjs/toolkit'

interface IAuthState {
  isAuth: boolean
  user: string
  showSignIn: boolean
  showSignUp: boolean
}

const initialState: IAuthState = {
  isAuth: false,
  user: '',
  showSignIn: false,
  showSignUp: false,
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
    hideForms: (state) => {
      state.showSignIn = false
      state.showSignUp = false
    },
    showSignIn: (state) => {
      state.showSignIn = true
    },
    showSignUp: (state) => {
      state.showSignUp = true
    },
  },
})

export const { signIn, signOut, hideForms, showSignIn, showSignUp } =
  authSlice.actions

export default authSlice.reducer
