import { configureStore } from '@reduxjs/toolkit'
import { moviesDataReducer } from '../pages/Home/moviesData-slice.ts'
import { currentMovieReducer } from '../pages/MoviePage/movie-slice'
import { appReducer } from './app-slice.ts'

export const store = configureStore({
  reducer: {
    moviesData: moviesDataReducer,
    currentMovie: currentMovieReducer,
    app: appReducer,
  },
})
