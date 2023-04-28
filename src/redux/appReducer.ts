import { setUserDataThunkCreator } from 'src/redux/authReducer';
import { CommonActionTypes, CommonThunkType } from 'src/redux/redux-store';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
const CORSE_ERROR = 'CORSE_ERROR';

type InitialStateAppType = {
  isInitialized: boolean;
  isCorseError: boolean;
};

const initialState: InitialStateAppType = {
  isInitialized: false,
  isCorseError: false,
};

const actions = {
  initializedSuccessAction: () => ({
    type: INITIALIZED_SUCCESS,
  }),
  corseErrorAction: () => ({
    type: CORSE_ERROR,
  }),
};

type AppActionsType = CommonActionTypes<typeof actions>;

export const appReducer = (state = initialState, action: AppActionsType) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      return {
        ...state,
        isInitialized: true,
      };
    }
    case CORSE_ERROR: {
      return {
        ...state,
        isCorseError: true,
      };
    }

    default:
      return state;
  }
};

export const initializedThunkCreator =
  (): CommonThunkType<AppActionsType> => async (dispatch) => {
    const dispatchResult = dispatch(setUserDataThunkCreator());
    dispatchResult
      .then(() => {
        dispatch(actions.initializedSuccessAction());
      })
      .catch((error) => {
        if (error instanceof Error && error.message === 'Network Error') {
          dispatch(actions.corseErrorAction());
        }
      });
  };
