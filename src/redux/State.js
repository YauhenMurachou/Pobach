import React from 'react';
import ReactDOM from 'react-dom';

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

let store = {

	_state: {

		dialogsData: [
			{ name: 'Volha', id: 2 },
			{ name: 'Alena', id: 3 },
			{ name: 'Mikalay', id: 4 },
			{ name: 'Nina', id: 5 },
			{ name: 'Vasil', id: 6 }
		],

		messageData: [
			{ message: 'You are woman', id: 2 },
			{ message: 'I am a man', id: 3 },
			{ message: 'This is more than just a game', id: 4 },
			{ message: 'New message', id: 5 },
			{ message: 'Hello!', id: 6 }
		],

		postsData: [
			{ message: 'Привет, как дела?', id: 1, likesCount: 0 },
			{ message: 'Hi! How are you?', id: 2, likesCount: 21 },
			{ message: 'Прывітанне, як твае справы?', id: 3, likesCount: 16 }
		],

		newPostText: 'New post hardcore',

		newMessageText: 'New message hardcore'
	},

	getState() {

		return this._state
	},

	_callSubscriber() {

	},

	dispatch(action) {

		if (action.type === ADD_POST) {
			let newPost = {
				message: this._state.newPostText,
				id: 5,
				likesCount: 0
			}

			this._state.postsData.push(newPost);
			this._state.newPostText = '';
			this._callSubscriber(this._state);

		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.newPostText = action.updatePost;
			this._callSubscriber(this._state);
		}

		else if (action.type === ADD_MESSAGE) {
			let newMessage = {
				message: this._state.newMessageText,
				id: 7 				
			}

			this._state.messageData.push(newMessage);
			this._state.newMessageText = '';
			this._callSubscriber(this._state);
		}

		else if (action.type === UPDATE_MESSAGE) {
			this._state.newMessageText = action.updateMessage;
			this._callSubscriber(this._state);
		}
	},

	subscribe(observer) {
		this._callSubscriber = observer;
	}
}

export let addPostActionCreator = () => {
	return { type: ADD_POST }
}

export let updatePostActionCreator = (text) => {
	return { type: UPDATE_NEW_POST_TEXT, updatePost: text }
}

export let addMessageActionCreator = () => {
	return { type: ADD_MESSAGE }
}

export let updateMessageActionCreator = (message) => {
	return { type: UPDATE_MESSAGE, updateMessage: message }
}

export default store;


