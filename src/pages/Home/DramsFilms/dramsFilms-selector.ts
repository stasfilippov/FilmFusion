import { RootState } from '../../../utils/redux-utils.ts'

export const dramsFilmsSelector = (state: RootState) => state.moviesData.dramsMovies
