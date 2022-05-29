import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './App.css';

import HeaderContainer from './components/header/HeaderContainer';
import Navbar from './components/navbar/Navbar';
import ProfileContainer from './components/profile/ProfileContainer';
import DialogsContainer from './components/dialogs/DialogsContainer';
import Feed from './components/feed/Feed';
import Photos from './components/photos/Photos';
import Settings from './components/settings/Settings';
import UsersContainer from './components/users/UsersContainer';
import Login from './components/login/Login';
import { setUserDataThunkCreator } from './redux/authReducer';

const App = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		console.log('inside App useEffect')
		dispatch(setUserDataThunkCreator())
	});

	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<HeaderContainer />
				<Navbar />
				<div className='app-wrapper-content'>

					<Route path='/Dialogs' render={() => <DialogsContainer />} />

					<Route path='/Profile/:userId?' render={() => <ProfileContainer />} />

					<Route path='/Feed' component={Feed} />
					<Route path='/Photos' component={Photos} />
					<Route path='/Settings' component={Settings} />
					<Route path='/Users' render={() => <UsersContainer />} />
					<Route path='/Login' render={() => <Login />} />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
