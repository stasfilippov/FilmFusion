import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { components } from '../../.temp/types'
import { movieAPI } from './movieAPI'



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
      }) //!сделать правильную обработку ошибок
      .addCase(fetchDramsMovies.fulfilled, (state, action) => {
        state.dramsMovies = action.payload.res.data.docs
      })
      .addCase(fetchDramsMovies.rejected, (state, action) => {
        state.dramsMovies = []
      }) //!сделать правильную обработку ошибок
      .addCase(fetchComedyMovies.fulfilled, (state, action) => {
        state.comedyMovies = action.payload.res.data.docs
      })
      .addCase(fetchComedyMovies.rejected, (state, action) => {
        state.comedyMovies = []
      }) //!сделать правильную обработку ошибок
      .addCase(fetchHorrorMovies.fulfilled, (state, action) => {
        state.horrorsMovies = action.payload.res.data.docs
      })
      .addCase(fetchHorrorMovies.rejected, (state, action) => {
        state.horrorsMovies = []
      }) //!сделать правильную обработку ошибок
  },
})

export const fetchNewMovies = createAsyncThunk(`${slice.name}/fetchNewMovies`, async (param, thunkAPI) => {
  try {
    const { dispatch } = thunkAPI
    const res = await movieAPI.getNewMovies()
    return { res }
  } catch (error) {
    return thunkAPI.rejectWithValue(null) //!сделать правильную обработку ошибок
  }
})
export const fetchDramsMovies = createAsyncThunk(`${slice.name}/fetchDramsMovies`, async (param, thunkAPI) => {
  try {
    const { dispatch } = thunkAPI
    const res = await movieAPI.getDramsMovies()
    return { res }
  } catch (error) {
    return thunkAPI.rejectWithValue(null) //!сделать правильную обработку ошибок
  }
})

export const fetchComedyMovies = createAsyncThunk(`${slice.name}/fetchComedyMovies`, async (param, thunkAPI) => {
  try {
    const { dispatch } = thunkAPI
    const res = await movieAPI.getComedyMovies()
    return { res }
  } catch (error) {
    return thunkAPI.rejectWithValue(null) //!сделать правильную обработку ошибок
  }
})

export const fetchHorrorMovies = createAsyncThunk(`${slice.name}/fetchHorrorMovies`, async (param, thunkAPI) => {
  try {
    const { dispatch } = thunkAPI
    const res = await movieAPI.getHorrorMovies()
    return { res }
  } catch (error) {
    return thunkAPI.rejectWithValue(null) //!сделать правильную обработку ошибок
  }
})

export const moviesDataReducer = slice.reducer
export const moviesDataActions = slice.actions
export const moviesDataThunks = { fetchNewMovies, fetchDramsMovies, fetchComedyMovies, fetchHorrorMovies }
