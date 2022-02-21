import React from 'react';
import { useSelector } from 'react-redux';
import { reduxForm } from 'redux-form';

import LoginForm from './LoginForm';

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = () => {
	const onSubmit = (formData) => {
		console.log('onSubmit---')
	}

	// const { isAuth } = useSelector(state => state.authReducer);

	return <>
		<h1>
			Login
		</h1>

		<LoginReduxForm onSubmit={onSubmit}/>

		{/* <div>
			<a href="https://social-network.samuraijs.com/login" target="_blank" rel="noreferrer">Войдите в свой аккаунт</a>

		</div> */}

	</>
}

export default Login;