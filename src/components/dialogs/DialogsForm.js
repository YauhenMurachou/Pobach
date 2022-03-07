import React from 'react';

import { Field } from 'redux-form';

import classes from './Dialogs.module.css';

const DialogsForm = (props) => {

	return <>
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field name='newMessage' component={'textarea'} />
			</div>
			
			<button className={classes.addButton}>
				Write message
			</button>
		</form>
	</>
};

export default DialogsForm;