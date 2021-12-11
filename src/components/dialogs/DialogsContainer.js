import React from 'react';

import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/dialogsPageReducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {

	let state = props.store.getState().dialogsPage

	let addNewMessageButton = () => {
		props.store.dispatch(addMessageActionCreator())
	}

	let updateMessage = (message) => {
		props.store.dispatch(updateMessageActionCreator(message))
	}

	return (
		<Dialogs
			addNewMessageButton={addNewMessageButton}
			updateMessage={updateMessage}
			dialogsItems={state.dialogsData}
			messagesItems={state.messageData}
			newMessageText={state.newMessageText}
		/>
	)
};

export default DialogsContainer;