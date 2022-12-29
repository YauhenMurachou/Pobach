import React, { useEffect, Suspense } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { initializedThunkCreator } from './redux/appReducer';
import Loader from './components/loader/Loader';
import { RootState } from './redux/redux-store';

import styles from './App.module.css';

const Header = React.lazy(() => import('./components/header/Header'));
const Navbar = React.lazy(() => import('./components/navbar/Navbar'));
const ProfileContainer = React.lazy(
  () => import('./components/profile/ProfileContainer')
);
const Dialogs = React.lazy(() => import('./components/dialogs/Dialogs'));
const Feed = React.lazy(() => import('./components/feed/Feed'));
const Photos = React.lazy(() => import('./components/photos/Photos'));
const Settings = React.lazy(() => import('./components/settings/Settings'));
const UsersContainer = React.lazy(
  () => import('./components/users/UsersContainer')
);
const Login = React.lazy(() => import('./components/login/Login'));
const ChatPage = React.lazy(() => import('./components/chat/ChatPageDefaultExport'));

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { isInitialized } = useSelector((state: RootState) => state.appReducer);

  useEffect(() => {
    dispatch(initializedThunkCreator());
  }, []);

  return (
    <>
      {isInitialized && (
        <HashRouter>
          <Suspense fallback={<Loader isFetching />}>
            <div className={styles.appWrapper}>
              <Header />
              <Navbar />
              <div className={styles.appWrapperContent}>
                <Route path="/Dialogs" render={() => <Dialogs />} />
                <Route
                  path="/Profile/:userId?"
                  render={() => <ProfileContainer />}
                />
                <Route path="/Feed" component={Feed} />
                <Route path="/Photos" component={Photos} />
                <Route path="/Settings" component={Settings} />
                <Route path="/Users" render={() => <UsersContainer />} />
                <Route path="/Chat" render={() => <ChatPage />} />
              </div>
            </div>
            <Route path="/login" render={() => <Login />} />
            {/* <Route path="*" render={() => <Login />} /> */}
          </Suspense>
        </HashRouter>
      )}

      {!isInitialized && <Loader isFetching={!isInitialized} />}
    </>
  );
};

export default App;
