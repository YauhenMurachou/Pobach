import { configureStore } from '@reduxjs/toolkit';
import { Action, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { ThunkAction } from 'redux-thunk';
import { appReducer } from 'src/redux/appReducer';
import { authReducer } from 'src/redux/authReducer';
import { chatReducer } from 'src/redux/chatReducer';
import dialogsPageReducer from 'src/redux/dialogsPageReducer';
import dialogsReducer from 'src/redux/dialogsReducer';
import friendsReducer from 'src/redux/friendsReducer';
import photosReducer from 'src/redux/photosReducer';
import { profilePageReducer } from 'src/redux/profilePageReducer';
import { rootSaga } from 'src/redux/sagas/sagas';
import settingsReducer from 'src/redux/settingsReducer';
import usersReducer from 'src/redux/usersReducer';

const reducer = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  users: usersReducer,
  auth: authReducer,
  appReducer: appReducer,
  chat: chatReducer,
  photos: photosReducer,
  settings: settingsReducer,
  dialogs: dialogsReducer,
  friends: friendsReducer,
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

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: (defaultMiddleware) => defaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof reducer>;

export default store;
