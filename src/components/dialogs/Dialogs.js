import React from 'react';

import classes from './Dialogs.module.css';

import DialogItem from './dialogItem/DialogItem';
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/State';


const Message = (props) => {
	return <div className={classes.message}>
		{props.message}
	</div>
}

const Dialogs = (props) => {
	let newMessageElement = React.createRef();

	let addNewMessageButton = () => {
		props.dispatch(addMessageActionCreator())
	}

	let updateMessage = () => {

		let message = newMessageElement.current.value;
		console.log('updateMessage--', message)
		props.dispatch(updateMessageActionCreator(message))
	}

	let dialogsItems = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
	let messagesItems = props.messageData.map(message => <Message message={message.message} id={message.id} />)


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