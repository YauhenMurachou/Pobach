import React from 'react';
import ReactDOM from 'react-dom';

const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

const dialogsPageReducer = (state, action) => {

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