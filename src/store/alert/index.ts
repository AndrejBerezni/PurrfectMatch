import { createSlice } from '@reduxjs/toolkit'

interface IAlertState {
  showAlert: boolean
  alertMessage: string
  alertType: string
}

const initialState: IAlertState = {
  showAlert: false,
  alertMessage: '',
  alertType: '',
}

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    showAlert: (state, action) => {
      state.showAlert = true
      state.alertMessage = action.payload.message
      state.alertType = action.payload.type
    },
    hideAlert: () => initialState,
  },
})

export const { showAlert, hideAlert } = alertSlice.actions

export default alertSlice.reducer
