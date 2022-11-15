import { combineReducers, createStore, applyMiddleware, Action } from 'redux';

import profilePageReducer from './profilePageReducer';
import dialogsPageReducer from './dialogsPageReducer';
import usersReducer from './usersReducer';
import { authReducer } from './authReducer';
import { appReducer } from './appReducer';
import thunk, { ThunkAction } from 'redux-thunk';

const reducers = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  usersPage: usersReducer,
  auth: authReducer,
  appReducer: appReducer,
});

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type CommonActionTypes<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends { [key: string]: (...args: any[]) => any }
> = ReturnType<InferValueTypes<T>>;

export type CommonThunkType<ActionsType extends Action> = ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  ActionsType
>;

const store = createStore(reducers, applyMiddleware(thunk));

export type RootState = ReturnType<typeof reducers>;

window.store = store;

export default store;
