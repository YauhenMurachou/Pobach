import React from 'react';
import { Field } from 'redux-form';

import { Input } from '../common/FormsControl';
import { required, maxLengthCreator } from '../../utils/validators/validators';

const maxLength10 = maxLengthCreator(10)

const LoginForm = (props) => {
	console.log('LoginForm', props)
	return <>
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field placeholder='login' name='login' component={Input} validate={[required, maxLength10]} />
			</div>
			<div>
				<Field placeholder='password' name='password' component={Input} validate={[required, maxLength10]} />
			</div>
			<div>
				<Field type='checkbox' name='checkbox' component={'input'} />remeber me
			</div>
			<div>
				<button>Login </button>
			</div>
		</form>
	</>
}

export default LoginForm;