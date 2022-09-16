import { usersApi } from '../api/api';
import { ThunkAction } from 'redux-thunk';
import { RootState } from './redux-store';

// import { stopSubmit } from "redux-form"

const SET_USER_DATA = 'SET_USER_DATA';

type setUserDataActionType = {
  type: typeof SET_USER_DATA;
  data: authInitialStateType;
};

export type authInitialStateType = {
  isAuth: boolean | null;
  userId: number | null;
  email: string | null;
  login: string | null;
};

const initialState: authInitialStateType = {
  isAuth: null,
  userId: null,
  email: null,
  login: null,
};

export const authReducer = (
  state = initialState,
  action: setUserDataActionType
): authInitialStateType => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
      };
    }

    default:
      return state;
  }
};

export const setUserDataActionCreator = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean | null
): setUserDataActionType => ({
  type: SET_USER_DATA,
  data: { userId, email, login, isAuth },
});

export const setUserDataThunkCreator = (): ThunkAction<
  void,
  RootState,
  unknown,
  setUserDataActionType
> => {
  return async (dispatch: Function) => {
    const data = await usersApi.setLogin();
    if (data.resultCode === 0) {
      const { id, email, login } = data.data;
      dispatch(setUserDataActionCreator(id, email, login, true));
    }
  };
};

export const loginDataThunkCreator = (
  email: string | null,
  password: string | null,
  rememberMe: boolean | null
): ThunkAction<void, RootState, unknown, setUserDataActionType> => {
  return (dispatch: any) => {
    usersApi.login(email, password, rememberMe).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setUserDataThunkCreator());
      }
      // else {
      //   const message =
      //     data.messages.length > 0 ? data.messages[0] : 'Какая-то ошибка хз';
      // dispatch(stopSubmit("login", { _error: message }))
      // }
    });
  };
};

export const logoutDataThunkCreator = (): ThunkAction<
  void,
  RootState,
  unknown,
  setUserDataActionType
> => {
  return (dispatch: Function) => {
    usersApi.logout().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setUserDataActionCreator(null, null, null, true));
      }
    });
  };
};
