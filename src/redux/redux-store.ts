import { composeWithDevTools } from '@redux-devtools/extension';
import { Action, applyMiddleware, combineReducers, createStore } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import { appReducer } from 'src/redux/appReducer';
import { authReducer } from 'src/redux/authReducer';
import { chatReducer } from 'src/redux/chatReducer';
import dialogsPageReducer from 'src/redux/dialogsPageReducer';
import { profilePageReducer } from 'src/redux/profilePageReducer';
import usersReducer from 'src/redux/usersReducer';

const reducers = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  usersPage: usersReducer,
  auth: authReducer,
  appReducer: appReducer,
  chatReducer: chatReducer,
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

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof reducers>;

export default store;
