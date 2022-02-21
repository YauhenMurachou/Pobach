import React from 'react';

import DialogItem from './dialogItem/DialogItem';
import Message from './message/Message';
import DialogsForm from './DialogsForm';


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

	return <>
		<DialogsForm
			dialogsItems={dialogsItems}
			messagesItems={messagesItems}
			newMessageElement={newMessageElement}
			updateMessage={updateMessage}
			newMessageText={props.newMessageText}
			addNewMessageButton={addNewMessageButton}
		/>
	</>
};

export default Dialogs;