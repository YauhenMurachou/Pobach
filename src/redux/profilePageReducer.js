import React from 'react';
import ReactDOM from 'react-dom';

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
	postsData: [
		{ message: 'Привет, как дела?', id: 1, likesCount: 0 },
		{ message: 'Hi! How are you?', id: 2, likesCount: 21 },
		{ message: 'Прывітанне, як твае справы?', id: 3, likesCount: 16 }
	],

	newPostText: 'New post hardcore'
};

const profilePageReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				message: state.newPostText,
				id: 5,
				likesCount: 0
			}

			let stateCopy = { ...state };
			stateCopy.postsData = [...state.postsData];
			stateCopy.postsData.push(newPost);
			stateCopy.newPostText = '';
			return stateCopy
		}

		case UPDATE_NEW_POST_TEXT: {
			let stateCopy = { ...state };
			stateCopy.newPostText = action.updatePost;
			return stateCopy
		}

		default:
			return state;
	}
}

export let addPostActionCreator = () => {
	return { type: ADD_POST }
}

export let updatePostActionCreator = (text) => {
	return { type: UPDATE_NEW_POST_TEXT, updatePost: text }
}

export default profilePageReducer;
