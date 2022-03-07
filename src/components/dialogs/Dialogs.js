import React from 'react';
import { reduxForm } from 'redux-form';

import DialogItem from './dialogItem/DialogItem';
import Message from './message/Message';
import DialogsForm from './DialogsForm';

import classes from './Dialogs.module.css';

const DialogsReduxForm = reduxForm({ form: 'dialogs' })(DialogsForm);

const Dialogs = (props) => {

	let addNewMessage = (values) => {
		props.addNewMessage(values.newMessage)
	}

	let dialogsItems = props.dialogsItems.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
	let messagesItems = props.messagesItems.map(message => <Message message={message.message} id={message.id} />)

	return <div className={classes.dialogs}>

		<div className={classes.dialogsItems} >
			{dialogsItems}
		</div>

		<div className={classes.messages}>
			<div>{messagesItems}</div>
			<DialogsReduxForm onSubmit={addNewMessage} />
		</div>
	</div>
};

export default Dialogs;