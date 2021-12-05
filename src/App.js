import React from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import Feed from "./components/feed/Feed";
import Photos from "./components/photos/Photos";
import Settings from "./components/settings/Settings";

import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';


const App = (props) => {
	// console.log('subscribe--')

	// console.log('App--', props)
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Navbar />
				<div className='app-wrapper-content'>

					<Route path="/Dialogs" render={() => <Dialogs
						dialogsData={props.state.dialogsData}
						messageData={props.state.messageData}
						newMessageText={props.state.newMessageText}
						dispatch={props.dispatch} />} />

					<Route path="/Profile" render={() => <Profile
						postsData={props.state.postsData}
						dispatch={props.dispatch}
						newPostText={props.state.newPostText}
					/>} />


					<Route path="/Feed" component={Feed} />
					<Route path='/Photos' component={Photos} />
					<Route path='/Settings' component={Settings} />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
