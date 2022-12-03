import React, { useEffect } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import ProfileContainer from './components/profile/ProfileContainer';
import Dialogs from './components/dialogs/Dialogs';
import Feed from './components/feed/Feed';
import Photos from './components/photos/Photos';
import Settings from './components/settings/Settings';
import UsersContainer from './components/users/UsersContainer';
import Login from './components/login/Login';
import { initializedThunkCreator } from './redux/appReducer';
import Loader from './components/loader/Loader';
import { ChatPage } from './components/chat/ChatPage';
import { RootState } from './redux/redux-store';

import './App.css';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { isInitialized } = useSelector((state: RootState) => state.appReducer);

  useEffect(() => {
    dispatch(initializedThunkCreator());
  }, [dispatch]);

  return (
    <>
      {isInitialized && (
        <HashRouter>
          <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
              <Route path="/Dialogs" render={() => <Dialogs />} />
              <Route
                path="/Profile/:userId?"
                render={() => <ProfileContainer />}
              />
              <Route path="/Feed" component={Feed} />
              <Route path="/Photos" component={Photos} />
              <Route path="/Settings" component={Settings} />
              <Route path="/Users" render={() => <UsersContainer />} />
              <Route path="/Login" render={() => <Login />} />
              <Route path="/Chat" render={() => <ChatPage />} />
            </div>
          </div>
        </HashRouter>
      )}
      {!isInitialized && <Loader isFetching={!isInitialized} />}
    </>
  );
};

export default App;
