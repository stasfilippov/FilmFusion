import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { movieAPI } from '../../api/movieAPI'

const fetchSliderMain = createAsyncThunk('sliderMain/fetchSliderMain', async (param, thunkAPI) => {
  try {
    const { dispatch } = thunkAPI
    const res = await movieAPI.getNewMovies()
  } catch (e) {}
})

export const slice = createSlice({
  name: 'sliderMain',
  initialState: {},
  reducers: {},
})

export const sliderMainReducer = slice.reducer
