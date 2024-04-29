import { store } from '../app/store'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'

export type AppRootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = ThunkDispatch<AppRootStateType, unknown, AnyAction>
// export type ThunkError = { rejectValue: { errors: Array<string>, fieldsErrors?: Array<FieldErrorType> } }
