import { setUserDataThunkCreator } from 'src/redux/authReducer';
import { CommonActionTypes, CommonThunkType } from 'src/redux/redux-store';

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

export const initializedThunkCreator =
  (): CommonThunkType<AppActionsType> => async (dispatch) => {
    const dispatchResult = dispatch(setUserDataThunkCreator());
    dispatchResult.then(() => {
      dispatch(actions.initializedSuccessAction());
    });
  };
