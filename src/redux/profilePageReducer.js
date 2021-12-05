import React from 'react';
import ReactDOM from 'react-dom';

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const profilePageReducer = (state, action) => {	

	switch (action.type) {
		case ADD_POST:
			let newPost = {
				message: state.newPostText,
				id: 5,
				likesCount: 0
			}
			state.postsData.push(newPost);
			state.newPostText = '';

			return state

		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.updatePost;
			
			return state

			default:
			return state ;			
	}
}

	export let addPostActionCreator = () => {
		return { type: ADD_POST }
	}

	export let updatePostActionCreator = (text) => {
		return { type: UPDATE_NEW_POST_TEXT, updatePost: text }
	}

	export default profilePageReducer;
