import { ThunkAction } from 'redux-thunk';
// import { setUserDataThunkCreator } from './authReducer';
// import { ThunkDispatch } from 'redux-thunk';
// import { RootState } from './redux-store';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

type initializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS;
};

type ThunkType = ThunkAction<
  Promise<void>,
  InitialStateAppType,
  unknown,
  initializedSuccessActionType
>;

export type InitialStateAppType = {
  isInitialized: boolean;
};

const initialState: InitialStateAppType = {
  isInitialized: false,
};

export const appReducer = (
  state = initialState,
  action: initializedSuccessActionType
  //строчка ниже - получаемое значение вызова функции
): InitialStateAppType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      return {
        ...state,
        isInitialized: true,
      };
    }

    default:
      return state;
  }
};

export const initializedSuccessAction = (): initializedSuccessActionType => ({
  type: INITIALIZED_SUCCESS,
});

export const initializedThunkCreator = (): ThunkType => {
  return async (
    dispatch
    // : ThunkDispatch<RootState, unknown, initializedSuccessActionType>
  ) => {
    // dispatch(setUserDataThunkCreator());
    // console.log('promise', promise);
    await dispatch(initializedSuccessAction());
  };
};
