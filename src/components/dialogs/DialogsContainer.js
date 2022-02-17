import React from 'react';
import { connect } from 'react-redux';

import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/dialogsPageReducer';
import Dialogs from './Dialogs';
import withAuthRedirect from '../hoc/withAuthRedirect';
import { compose } from 'redux';

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

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);

// let AuthRedirectLogin = withAuthRedirect(Dialogs)

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectLogin)

// export default DialogsContainer;