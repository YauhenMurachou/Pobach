import React from 'react';

import { Field } from 'redux-form';

import classes from './Myposts.module.css';

const MyPostsForm = (props) => {

	return <form className={classes.item} onSubmit={props.handleSubmit}>
		<div>
			<Field component={'textarea'} name='newPost' />
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