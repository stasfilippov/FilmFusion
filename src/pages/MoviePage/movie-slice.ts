import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { components } from '../../../.temp/types'
import { movieAPI } from '../../api/movieAPI'
import { setAppStatus } from '../../app/app-slice.ts'
import { handleServerNetworkError } from '../../utils/utils-error.ts'

export const slice = createSlice({
  name: 'currentMovie',
  initialState: {
    currentMovie: {} as components['schemas']['MovieDtoV1_4'],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieById.fulfilled, (state, action) => {
        state.currentMovie = action.payload.res.data
      })
      .addCase(fetchMovieById.rejected, (state, action) => {
        state.currentMovie = {}
      })
  },
})

export const fetchMovieById = createAsyncThunk(`${slice.name}/fetchMovieById`, async (id: number, thunkAPI) => {
  const { dispatch } = thunkAPI

  try {
    dispatch(setAppStatus({ status: 'loading' }))
    const res = await movieAPI.getMovieById(id)
    dispatch(setAppStatus({ status: 'success' }))
    return { res }
  } catch (error) {
    handleServerNetworkError(error, dispatch)
    dispatch(setAppStatus({ status: 'failed' }))
    return thunkAPI.rejectWithValue(null)
  }
})

export const currentMovieReducer = slice.reducer
export const currentMovieThunks = { fetchMovieById }
