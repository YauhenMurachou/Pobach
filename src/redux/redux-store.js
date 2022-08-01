import { combineReducers, createStore, applyMiddleware } from 'redux';

import profilePageReducer from './profilePageReducer';
import dialogsPageReducer from './dialogsPageReducer';
import usersReducer from './usersReducer';
import {authReducer} from './authReducer';
import { appReducer } from './appReducer';
import thunk from 'redux-thunk';


let reducers = combineReducers({
	profilePage: profilePageReducer,
	dialogsPage: dialogsPageReducer,
	usersPage: usersReducer,
	auth: authReducer,
	appReducer: appReducer
})


let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;