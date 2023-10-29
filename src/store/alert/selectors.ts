import { get } from 'lodash'
import { RootState } from '..'

export const getAlertShow = (store: RootState) =>
  get(store, 'alert.showAlert', false)

export const getAlertType = (store: RootState) =>
  get(store, 'alert.alertType', '')

export const getAlertMessage = (store: RootState) =>
  get(store, 'alert.alertMessage', '')
