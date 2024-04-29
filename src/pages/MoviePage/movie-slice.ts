import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { components } from '../../../.temp/types'
import { movieAPI } from '../../api/movieAPI'

const fetchMovieById = createAsyncThunk('currentMovie/fetchMovieById', async (id: number, thunkAPI) => {
  try {
    const { dispatch } = thunkAPI
    const res = await movieAPI.getMovieById(id)
    return { res }
  } catch (error) {
    return thunkAPI.rejectWithValue(null) //!сделать правильную обработку ошибок
  }
})

export const slice = createSlice({
  name: 'currentMovie',
  initialState: {
    currentMovie: {} as components['schemas']['MovieDtoV1_4'],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovieById.fulfilled, (state, action) => {
      state.currentMovie = action.payload.res.data.responses[200].content['application/json']
    }),
      builder.addCase(fetchMovieById.rejected, (state, action) => {
        state.currentMovie = {}
      })
  },
})

export const currentMovieReducer = slice.reducer
export const currentMovieThunks = { fetchMovieById }
