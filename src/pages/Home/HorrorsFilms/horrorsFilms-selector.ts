import { RootState } from '../../../utils/redux-utils.ts'

export const horrorsFilmsSelector = (state: RootState) => state.moviesData.horrorsMovies
