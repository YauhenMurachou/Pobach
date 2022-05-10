import React from 'react';

import classes from './FormsControl.module.css';

export const Textarea = ({ input, meta, ...props }) => {

	const hasError = meta.touched && meta.error;

	return (
		<div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
			<div>
				<textarea {...input} {...props} />
			</div>
			<div>
				{hasError && <span>{meta.error}</span>}
			</div>
		</div>
	)
}

export const Input = ({ input, meta, ...props }) => {

	const hasError = meta.touched && meta.error;

	return (
		<div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
			<div>
				<input {...input} {...props} />
			</div>
			<div>
				{hasError && <span>{meta.error}</span>}
			</div>
		</div>
	)
}