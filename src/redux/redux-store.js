import { combineReducers, createStore } from 'redux';

import profilePageReducer from './profilePageReducer';
import dialogsPageReducer from './dialogsPageReducer';
import usersReducer from './usersReducer'

let reducers = combineReducers({
	profilePage: profilePageReducer,
	dialogsPage: dialogsPageReducer,
	usersPage: usersReducer
})


let store = createStore(reducers);

window.store = store;

export default store;