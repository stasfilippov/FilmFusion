import { configureStore } from '@reduxjs/toolkit'
import {moviesDataReducer} from '../api/moviesData-slice.ts'
import { currentMovieReducer } from '../pages/MoviePage/movie-slice'

export const store = configureStore({
  reducer: {
    moviesData: moviesDataReducer,
    currentMovie: currentMovieReducer,
  },
})
