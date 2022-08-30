import { setUserDataThunkCreator } from "./authReducer"

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"

type initializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS
}

// type DispatchType = (dispatch: Function | TypeOfAction) => void
// type DispatchType = Function;

export type InitialStateType = {
  isInitialized: boolean
}

let initialState: InitialStateType = {
  isInitialized: false
}

export const appReducer = (
  state = initialState,
  action: initializedSuccessActionType
  //строчка ниже - получаемое значение вызова функции
): InitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      return {
        ...state,
        isInitialized: true
      }
    }

    default:
      return state
  }
}

export const initializedSuccessAction = (): initializedSuccessActionType => ({
  type: INITIALIZED_SUCCESS
})

export const initializedThunkCreator = () => {
  return (dispatch: Function) => {
    const promise = dispatch(setUserDataThunkCreator())
    promise.then(() => dispatch(initializedSuccessAction()))
  }
}
