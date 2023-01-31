import { configureStore } from '@reduxjs/toolkit';
import { Action, combineReducers } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { appReducer } from 'src/redux/appReducer';
import { authReducer } from 'src/redux/authReducer';
import { chatReducer } from 'src/redux/chatReducer';
import dialogsPageReducer from 'src/redux/dialogsPageReducer';
import photosReducer from 'src/redux/photosReducer';
import { profilePageReducer } from 'src/redux/profilePageReducer';
import usersReducer from 'src/redux/usersReducer';

const reducer = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  usersPage: usersReducer,
  auth: authReducer,
  appReducer: appReducer,
  chatReducer: chatReducer,
  photos: photosReducer,
});

export type CommonActionTypes<T> = T extends {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: (...args: any[]) => infer U;
}
  ? U
  : never;

export type CommonThunkType<
  ActionsType extends Action,
  P = Promise<void>
> = ThunkAction<P, RootState, unknown, ActionsType>;

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof reducer>;

export default store;
