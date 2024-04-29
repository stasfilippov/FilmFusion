import { configureStore } from '@reduxjs/toolkit'
import { sliderMainReducer } from '../features/SliderMain/SliderSlice'

export const store = configureStore({
  reducer: {
    sliderMain: sliderMainReducer,
  },
})
