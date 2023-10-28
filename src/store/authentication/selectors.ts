import { get } from 'lodash'

import { RootState } from '..'

export const getAuthStatus = (store: RootState) =>
  get(store, 'authentication.isAuth', false)

export const getUser = (store: RootState) =>
  get(store, 'authentication.user', false)
