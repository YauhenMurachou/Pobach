import React from 'react';
import { Field } from 'redux-form';

const LoginForm = (props) => {

	return <>
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field placeholder='login' name='login' component={'input'}/>
			</div>
			<div>
				<Field placeholder='password' name='password' component={'input'}/>
			</div>
			<div>
				<Field type='checkbox' name='checkbox' component={'input'}/>remeber me
			</div>
			<div>
				<button>Login </button>
			</div>
		</form>
	</>
}

export default LoginForm;