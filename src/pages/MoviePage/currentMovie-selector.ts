import { RootState } from '../../utils/redux-utils.ts'

export const currentMovieSelector = (state: RootState) => state.currentMovie.currentMovie
