import React from 'react';
import { connect } from 'react-redux';

import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/dialogsPageReducer';
import Dialogs from './Dialogs';
// import StoreContext from '../../StoreContext';



// const DialogsContainer = (props) => {

// 	// let state = props.store.getState().dialogsPage

// 	// let addNewMessageButton = () => {
// 	// 	props.store.dispatch(addMessageActionCreator())
// 	// }

// 	// let updateMessage = (message) => {
// 	// 	props.store.dispatch(updateMessageActionCreator(message))
// 	// }

// 	return (

// 		<StoreContext.Consumer>
// 			{
// 				(store) => {

// 					let state = store.getState().dialogsPage

// 					let addNewMessageButton = () => {
// 						store.dispatch(addMessageActionCreator())
// 					}

// 					let updateMessage = (message) => {
// 						store.dispatch(updateMessageActionCreator(message))
// 					}
// 					return (
// 						<Dialogs
// 							addNewMessageButton={addNewMessageButton}
// 							updateMessage={updateMessage}
// 							dialogsItems={state.dialogsData}
// 							messagesItems={state.messageData}
// 							newMessageText={state.newMessageText}
// 						/>
// 					)
// 				}
// 			}
// 		</StoreContext.Consumer>

// 	)
// };

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