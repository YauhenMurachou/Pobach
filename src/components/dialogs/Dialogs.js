import React from 'react';

import classes from './Dialogs.module.css';

import DialogItem from './dialogItem/DialogItem';
import Message from './message/Message';
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/dialogsPageReducer';


const Dialogs = (props) => {
	let newMessageElement = React.createRef();

	let addNewMessageButton = () => {
		props.addNewMessageButton()
	}

	let updateMessage = () => {
		let message = newMessageElement.current.value;
		props.updateMessage(message)
	}

	let dialogsItems = props.dialogsItems.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
	let messagesItems = props.messagesItems.map(message => <Message message={message.message} id={message.id} />)


	return <div className={classes.dialogs}>
		<div className={classes.dialogsItems} >
			{dialogsItems}
		</div>

		<div className={classes.messages}>
			<div>{messagesItems}</div>
			<div>
				<div>
					<textarea ref={newMessageElement} onChange={updateMessage} value={props.newMessageText}></textarea>
				</div>
				<button className={classes.addButton} onClick={addNewMessageButton} >
					Write message
				</button>
			</div>
		</div>



	</div>
};

export default Dialogs;