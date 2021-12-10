import React from 'react';
import ReactDOM from 'react-dom';

const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

let initialState = {
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
};

const dialogsPageReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_MESSAGE:
			let newMessage = {
				message: state.newMessageText,
				id: 7
			}

			state.messageData.push(newMessage);
			state.newMessageText = '';

			return state

		case UPDATE_MESSAGE:
			state.newMessageText = action.updateMessage;

			return state

		default:
			return state;
	}
}

export let addMessageActionCreator = () => {
	return { type: ADD_MESSAGE }
}

export let updateMessageActionCreator = (message) => {
	return { type: UPDATE_MESSAGE, updateMessage: message }
}

export default dialogsPageReducer;