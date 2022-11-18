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

console.log('CommonThunkType');

const store = createStore(reducers, applyMiddleware(thunk));

export type RootState = ReturnType<typeof reducers>;

// window.store = store;

export default store;
