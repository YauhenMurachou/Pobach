import { FC, Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router-dom';

import CorseError from 'src/components/common/atoms/corseError/CorseError';
import Loader from 'src/components/common/atoms/loader/Loader';
import DialogOpened from 'src/components/dialogs/dialogOpened/DialogOpened';
import { MaterialProvider } from 'src/providers/MaterialProvider';
import { initializedThunkCreator } from 'src/redux/appReducer';
import {
  startMessagesThunkCreator,
  stopMessagesThunkCreator,
} from 'src/redux/chatReducer';
import { getNewMessagesCountAction } from 'src/redux/dialogsReducer';
import { RootState } from 'src/redux/redux-store';

import styles from './App.module.css';

const Header = lazy(() => import('./components/header/Header'));

const Navbar = lazy(() => import('./components/navbar/Navbar'));
const ProfileContainer = lazy(
  () => import('./components/profile/ProfileContainer')
);
const Dialogs = lazy(() => import('./components/dialogs/Dialogs'));
const StartPage = lazy(
  () => import('./components/common/atoms/startPage/StartPage')
);
const Photos = lazy(() => import('./components/photos/Photos'));
const Settings = lazy(() => import('./components/settings/Settings'));
const UsersContainer = lazy(() => import('./components/users/UsersContainer'));
const Login = lazy(() => import('./components/login/Login'));
const Friends = lazy(() => import('./components/friends/Friends'));
const ChatPage = lazy(() => import('./components/chat/ChatPageDefaultExport'));

const App: FC = () => {
  const dispatch = useDispatch();
  const { isInitialized, isCorseError } = useSelector(
    (state: RootState) => state.appReducer
  );
  const location = useLocation();

  useEffect(() => {
    dispatch(initializedThunkCreator());
  }, []);

  useEffect(() => {
    dispatch(startMessagesThunkCreator());
  }, [location]);

  useEffect(() => {
    dispatch(getNewMessagesCountAction());
  }, [location]);

  useEffect(
    () => () => {
      dispatch(stopMessagesThunkCreator());
    },
    [location]
  );

  return (
    <MaterialProvider>
      {isInitialized && (
        <Suspense fallback={<Loader isFetching />}>
          <div className={styles.appWrapper}>
            <Header />
            <Navbar />
            <div className={styles.appWrapperContent}>
              <Switch>
                <Route exact path="/Dialogs" render={() => <Dialogs />} />
                <Route path="/Dialogs/:id" render={() => <DialogOpened />} />
              </Switch>
              <Route
                path="/Profile/:userId?"
                render={() => <ProfileContainer />}
              />
              <Route path="/Photos" component={Photos} />
              <Route path="/Settings" component={Settings} />
              <Route path="/Users" render={() => <UsersContainer />} />
              <Route path="/Friends" render={() => <Friends />} />
              <Route path="/Chat" render={() => <ChatPage />} />
              <Route exact path="/" render={() => <StartPage />} />
            </div>
          </div>

          <Route path="/login" render={() => <Login />} />
        </Suspense>
      )}

      {!isInitialized && !isCorseError && (
        <Loader isFetching={!isInitialized} />
      )}
      {!isInitialized && isCorseError && <CorseError />}
    </MaterialProvider>
  );
};

export default App;
