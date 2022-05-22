import React from 'react';
import { Field } from 'redux-form';

import { Input } from '../common/FormsControl';
import { required, maxLengthCreator } from '../../utils/validators/validators';

import classes from './Login.module.css'

const maxLength10 = maxLengthCreator(20)

const LoginForm = (props) => {
	return <>
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field placeholder='login' name='email' component={Input} validate={[required, maxLength10]} />
			</div>
			<div>
				<Field placeholder='password' name='password' component={Input} type='password' validate={[required, maxLength10]} />
			</div>
			<div>
				<Field type='checkbox' name='rememberMe' component={'input'} />remember me
			</div>
			{props.error && <div className={classes.errorWarning}>
				{props.error}
			</div>}
			<div>
				<button>Login </button>
			</div>
		</form>
	</>
}

export default LoginForm;