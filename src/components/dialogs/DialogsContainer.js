import React from 'react';
import { connect } from 'react-redux';

import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/dialogsPageReducer';
import Dialogs from './Dialogs';
import withAuthRedirect from '../hoc/withAuthRedirect';

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

let AuthRedirectLogin = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectLogin)

export default DialogsContainer;