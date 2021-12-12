import React from 'react';

import { addPostActionCreator, updatePostActionCreator } from '../../../redux/profilePageReducer';
import Myposts from './Myposts';
import StoreContext from '../../../StoreContext';
// import store from '../../../redux/redux-store';


const MypostsContainer = (props) => {
	// console.log('MypostsContainer--', store)

	// let state = props.store.getState().profilePage

	


	return (
	<StoreContext.Consumer>
		{
			(store) => {

				let state = store.getState().profilePage

				let addPostButton = () => {
					// props.store.dispatch(addPostActionCreator())
					store.dispatch(addPostActionCreator())
				};
			
				let onPostChange = (text) => {		
					// props.store.dispatch(updatePostActionCreator(text))
					store.dispatch(updatePostActionCreator(text))
				}
				return (
		<Myposts
		addPostButton={addPostButton}
		onPostChange={onPostChange}
		posts = {state.postsData}
		newPostText = {state.newPostText} />
		)
	}
	}
	</StoreContext.Consumer>
	)
};

export default MypostsContainer;