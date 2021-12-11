import React from 'react';

import { addPostActionCreator, updatePostActionCreator } from '../../../redux/profilePageReducer';
import Myposts from './Myposts';


const MypostsContainer = (props) => {
	console.log('MypostsContainer--', props)

	let state = props.store.getState().profilePage

	let addPostButton = () => {
		props.store.dispatch(addPostActionCreator())
	}

	let onPostChange = (text) => {		
		props.store.dispatch(updatePostActionCreator(text))
	}


	return (
	<Myposts 
	addPostButton={addPostButton} 
	onPostChange={onPostChange} 
	posts = {state.postsData}
	newPostText = {state.newPostText} />)
};

export default MypostsContainer;