import React from 'react';
import { connect } from 'react-redux';

import { addMessageActionCreator } from '../../redux/dialogsPageReducer';
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
		addNewMessage: (newMessageText) => {
			dispatch(addMessageActionCreator(newMessageText))
		}
	}
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);
