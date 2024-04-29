import { RootState } from '../../../utils/redux-utils.ts'

export const comedyFilmsSelector = (state: RootState) => state.moviesData.comedyMovies
