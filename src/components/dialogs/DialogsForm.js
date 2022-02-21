import React from 'react';

import classes from './Dialogs.module.css';

const DialogsForm = ({ dialogsItems, messagesItems, newMessageElement, updateMessage, newMessageText, addNewMessageButton }) => {

	return <div className={classes.dialogs}>

		<div className={classes.dialogsItems} >
			{dialogsItems}
		</div>

		<div className={classes.messages}>
			<div>{messagesItems}</div>
			<div>
				<div>
					<textarea ref={newMessageElement} onChange={updateMessage} value={newMessageText}></textarea>
				</div>
				<button className={classes.addButton} onClick={addNewMessageButton} >
					Write message
				</button>
			</div>
		</div>

	</div>
};

export default DialogsForm;