import React from 'react';
import { connect } from 'react-redux';

import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/dialogsPageReducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
	return {
		dialogsItems: state.dialogsPage.dialogsData,
		messagesItems: state.dialogsPage.messageData,
		newMessageText: state.dialogsPage.newMessageText
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addNewMessageButton: () => {
			dispatch(addMessageActionCreator())
		},
		updateMessage: (message) => {
			dispatch(updateMessageActionCreator(message))
		}
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;