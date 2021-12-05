import React from 'react';
import ReactDOM from 'react-dom';

import postsDataReducer from './profilePageReducer';
import dialogsPageReducer from './dialogsPageReducer';



let store = {

	_state: {

		dialogsPage: {
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

			newMessageText: 'New message hardcore'
		},

		profilePage: {
			postsData: [
				{ message: 'Привет, как дела?', id: 1, likesCount: 0 },
				{ message: 'Hi! How are you?', id: 2, likesCount: 21 },
				{ message: 'Прывітанне, як твае справы?', id: 3, likesCount: 16 }
			],

			newPostText: 'New post hardcore'
		}
	},

	getState() {
		return this._state
	},

	_callSubscriber() {
	},

	dispatch(action) {
		this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action)
		this._state.profilePage = postsDataReducer(this._state.profilePage, action)

		this._callSubscriber(this._state);
	},

	subscribe(observer) {
		this._callSubscriber = observer;
	}
}

export default store;


