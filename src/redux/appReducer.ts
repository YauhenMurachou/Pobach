import { CommonThunkType, CommonActionTypes } from './redux-store';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export type InitialStateAppType = {
  isInitialized: boolean;
};

const initialState: InitialStateAppType = {
  isInitialized: false,
};

export const actions = {
  initializedSuccessAction: () => ({
    type: INITIALIZED_SUCCESS,
  }),
};

type AppActionsType = CommonActionTypes<typeof actions>;

export const appReducer = (
  state = initialState,
  action: AppActionsType
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

export const initializedThunkCreator = (): CommonThunkType<AppActionsType> => {
  return async (
    dispatch
    // : ThunkDispatch<RootState, unknown, initializedSuccessActionType>
  ) => {
    // dispatch(setUserDataThunkCreator());
    // console.log('promise', promise);
    dispatch(actions.initializedSuccessAction());
  };
};
