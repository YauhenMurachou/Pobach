import React from 'react';

import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/dialogsPageReducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';


const DialogsContainer = (props) => {

	// let state = props.store.getState().dialogsPage

	// let addNewMessageButton = () => {
	// 	props.store.dispatch(addMessageActionCreator())
	// }

	// let updateMessage = (message) => {
	// 	props.store.dispatch(updateMessageActionCreator(message))
	// }

	return (

		<StoreContext.Consumer>
			{
				(store) => {

					let state = store.getState().dialogsPage

					let addNewMessageButton = () => {
						store.dispatch(addMessageActionCreator())
					}

					let updateMessage = (message) => {
						store.dispatch(updateMessageActionCreator(message))
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
				}
			}
		</StoreContext.Consumer>

	)
};

export default DialogsContainer;