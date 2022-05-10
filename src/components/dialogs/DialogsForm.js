import React from 'react';

import { Field } from 'redux-form';
import { Textarea } from '../common/FormsControl';
import { required, maxLengthCreator } from '../../utils/validators/validators';

import classes from './Dialogs.module.css';

const maxLength20 = maxLengthCreator(20)

const DialogsForm = (props) => {

	return <>
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field name='newMessage' component={Textarea} validate={[required, maxLength20]} />
			</div>

			<button className={classes.addButton}>
				Write message
			</button>
		</form>
	</>
};

export default DialogsForm;