import React from 'react';

import { profileApi } from '../api/api';

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const GET_STATUS = 'GET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';

let initialState = {
	postsData: [
		{ message: 'Привет, как дела?', id: 1, likesCount: 0 },
		{ message: 'Hi! How are you?', id: 2, likesCount: 21 },
		{ message: 'Прывітанне, як твае справы?', id: 3, likesCount: 16 }
	],
	newPostText: 'New post hardcore',
	profile: null,
	status: ''
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

		case SET_USER_PROFILE: {
			return { ...state, profile: action.profile };
		}

		case GET_STATUS: {
			return { ...state, status: action.status };
		}

		case UPDATE_STATUS: {
			return { ...state, status: action.status };
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

export let setUserProfileActionCreator = (profile) => {
	return { type: SET_USER_PROFILE, profile }
}

export let getStatusActionCreator = (status) => {
	return { type: GET_STATUS, status }
}

export let updateStatusActionCreator = (status) => {
	return { type: UPDATE_STATUS, status }
}



export const setUserProfileThunkCreator = (userId) => {
	return (dispatch) => {
		profileApi.getProfile(userId)
			.then(data => {

				dispatch(setUserProfileActionCreator(data))
			}
			)
	}
}

export const getStatusThunkCreator = (userId) => {
	return (dispatch) => {
		profileApi.getStatus(userId)
			.then(data => {

				dispatch(getStatusActionCreator(data))
			}
			)
	}
}

export const updateStatusThunkCreator = (status) => {
	return (dispatch) => {
		profileApi.updateStatus(status)
			.then(data => {
				if (data.resultCode === 0) {
					dispatch(updateStatusActionCreator(status))
				}
			}
			)
	}
}

export default profilePageReducer;
