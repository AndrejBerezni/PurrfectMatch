import { get } from 'lodash'
import { RootState } from '..'

export const getAuthStatus = (store: RootState) =>
  get(store, 'authentication.isAuth', false)

export const getUser = (store: RootState) =>
  get(store, 'authentication.user', '')

export const getShowSignIn = (store: RootState) =>
  get(store, 'authentication.showSignIn', false)

export const getShowSignUp = (store: RootState) =>
  get(store, 'authentication.showSignUp', false)
