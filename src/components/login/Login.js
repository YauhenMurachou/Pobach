import React from 'react';
import { useSelector } from 'react-redux';

const Login = () => {

	// const { isAuth } = useSelector(state => state.authReducer);

	return <>
		<h1>
			Login
		</h1>
		<div>
			<a href="https://social-network.samuraijs.com/login" target="_blank" rel="noreferrer">Войдите в свой аккаунт</a>

		</div>
	</>
}

export default Login;