import { RootState } from '../utils/redux-utils.ts'

export const appSelectorStatus = (state: RootState) => state.app.status
