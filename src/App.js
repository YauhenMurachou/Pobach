import React, { useEffect } from "react"
import { HashRouter, Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import HeaderContainer from "./components/header/HeaderContainer"
import Navbar from "./components/navbar/Navbar"
import ProfileContainer from "./components/profile/ProfileContainer"
import DialogsContainer from "./components/dialogs/DialogsContainer"
import Feed from "./components/feed/Feed"
import Photos from "./components/photos/Photos"
import Settings from "./components/settings/Settings"
import UsersContainer from "./components/users/UsersContainer"
import Login from "./components/login/Login"
import { initializedThunkCreator } from "./redux/appReducer"
import Loader from "./components/loader/Loader"

import "./App.css"

const App = () => {
  const dispatch = useDispatch()
  const { isInitialized } = useSelector((state) => state.appReducer)

  useEffect(() => {
    dispatch(initializedThunkCreator())
  }, [dispatch])

  return (
    <div>
      {isInitialized && (
        <HashRouter>
          <div className="app-wrapper">
            <HeaderContainer />
            <Navbar />
            <div className="app-wrapper-content">
              <Route path="/Dialogs" render={() => <DialogsContainer />} />
              <Route path="/Profile/:userId?" render={() => <ProfileContainer />} />
              <Route path="/Feed" component={Feed} />
              <Route path="/Photos" component={Photos} />
              <Route path="/Settings" component={Settings} />
              <Route path="/Users" render={() => <UsersContainer />} />
              <Route path="/Login" render={() => <Login />} />
            </div>
          </div>
        </HashRouter>
      )}
      {!isInitialized && <Loader isFetching={!isInitialized} />}
    </div>
  )
}

export default App

