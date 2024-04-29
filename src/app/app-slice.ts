import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type appStatus = 'idle' | 'loading' | 'success' | 'failed'

export const slice = createSlice({
  name: 'appSlice',
  initialState: {
    status: 'idle' as appStatus,
    error: null as string | null,
  },
  reducers: {
    setAppStatus: (state, action: PayloadAction<{ status: appStatus }>) => {
      state.status = action.payload.status
    },
    setAppError: (state, action: PayloadAction<{ error: string | null }>) => {
      state.error = action.payload.error
    },
  },
})

export const appReducer = slice.reducer
export const { setAppStatus, setAppError } = slice.actions
