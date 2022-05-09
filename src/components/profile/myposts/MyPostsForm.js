import React from 'react';
import { Field } from 'redux-form';

import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControl';

import classes from './Myposts.module.css';

const maxLength10 = maxLengthCreator(10)

const MyPostsForm = (props) => {

	return <form className={classes.item} onSubmit={props.handleSubmit}>
		<div>
			<Field component={Textarea} name='newPost' placeholder='New post' validate={[required, maxLength10]} />
		</div>
		<div>
			<button className={classes.addButton}>
				Add post
			</button>

			<button>
				Remove post
			</button>
		</div>
	</form>
};

export default MyPostsForm;