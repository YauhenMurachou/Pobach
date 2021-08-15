import React from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import './App.css';
import Dialogs from './components/dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Navbar />
				<div className='app-wrapper-content'>
					<Route path="/Dialogs" component={Dialogs} />
					<Route path="/Profile" component={Profile} />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
