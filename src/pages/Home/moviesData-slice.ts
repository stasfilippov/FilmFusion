import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { components } from '../../../.temp/types.ts'
import { movieAPI } from '../../api/movieAPI.ts'
import { setAppStatus } from '../../app/app-slice.ts'
import { handleServerNetworkError } from '../../utils/utils-error.ts'

export const slice = createSlice({
  name: 'moviesData',
  initialState: {
    newMovies: [] as components['schemas']['MovieDtoV1_4'][],
    dramsMovies: [] as components['schemas']['MovieDtoV1_4'][],
    comedyMovies: [] as components['schemas']['MovieDtoV1_4'][],
    horrorsMovies: [] as components['schemas']['MovieDtoV1_4'][],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewMovies.fulfilled, (state, action) => {
        state.newMovies = action.payload.res.data.docs
      })
      .addCase(fetchNewMovies.rejected, (state, action) => {
        state.newMovies = []
      })
      .addCase(fetchDramsMovies.fulfilled, (state, action) => {
        state.dramsMovies = action.payload.res.data.docs
      })
      .addCase(fetchDramsMovies.rejected, (state, action) => {
        state.dramsMovies = []
      })
      .addCase(fetchComedyMovies.fulfilled, (state, action) => {
        state.comedyMovies = action.payload.res.data.docs
      })
      .addCase(fetchComedyMovies.rejected, (state, action) => {
        state.comedyMovies = []
      })
      .addCase(fetchHorrorMovies.fulfilled, (state, action) => {
        state.horrorsMovies = action.payload.res.data.docs
      })
      .addCase(fetchHorrorMovies.rejected, (state, action) => {
        state.horrorsMovies = []
      })
  },
})

export const fetchNewMovies = createAsyncThunk(`${slice.name}/fetchNewMovies`, async (param, thunkAPI) => {
  const { dispatch } = thunkAPI

  try {
    dispatch(setAppStatus({ status: 'loading' }))
    const res = await movieAPI.getNewMovies()
    dispatch(setAppStatus({ status: 'success' }))
    return { res }
  } catch (error) {
    handleServerNetworkError(error, dispatch)
    dispatch(setAppStatus({ status: 'failed' }))
    return thunkAPI.rejectWithValue(null)
  }
})
export const fetchDramsMovies = createAsyncThunk(`${slice.name}/fetchDramsMovies`, async (param, thunkAPI) => {
  const { dispatch } = thunkAPI

  try {
    dispatch(setAppStatus({ status: 'loading' }))
    const res = await movieAPI.getMoviesByGenre('драма')
    dispatch(setAppStatus({ status: 'success' }))
    return { res }
  } catch (error) {
    handleServerNetworkError(error, dispatch)
    dispatch(setAppStatus({ status: 'failed' }))
    return thunkAPI.rejectWithValue(null)
  }
})

export const fetchComedyMovies = createAsyncThunk(`${slice.name}/fetchComedyMovies`, async (param, thunkAPI) => {
  const { dispatch } = thunkAPI

  try {
    dispatch(setAppStatus({ status: 'loading' }))
    const res = await movieAPI.getMoviesByGenre('комедия')
    dispatch(setAppStatus({ status: 'success' }))
    return { res }
  } catch (error) {
    handleServerNetworkError(error, dispatch)
    dispatch(setAppStatus({ status: 'failed' }))
    return thunkAPI.rejectWithValue(null)
  }
})

export const fetchHorrorMovies = createAsyncThunk(`${slice.name}/fetchHorrorMovies`, async (param, thunkAPI) => {
  const { dispatch } = thunkAPI

  try {
    dispatch(setAppStatus({ status: 'loading' }))
    const res = await movieAPI.getMoviesByGenre('ужасы')
    dispatch(setAppStatus({ status: 'success' }))
    return { res }
  } catch (error) {
    handleServerNetworkError(error, dispatch)
    dispatch(setAppStatus({ status: 'failed' }))
    return thunkAPI.rejectWithValue(null)
  }
})

export const moviesDataReducer = slice.reducer
export const moviesDataActions = slice.actions
export const moviesDataThunks = { fetchNewMovies, fetchDramsMovies, fetchComedyMovies, fetchHorrorMovies }
