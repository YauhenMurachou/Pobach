import React from "react"
import { reduxForm } from "redux-form"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom"

import { loginDataThunkCreator } from "../../redux/authReducer"
import LoginForm from "./LoginForm"

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm)

const Login = () => {
  const dispatch = useDispatch()
  const { isAuth } = useSelector((state) => state.auth)
  const onSubmit = (formData) => {
    dispatch(loginDataThunkCreator(formData.email, formData.password, formData.rememberMe))
  }

  if (isAuth) {
    return <Redirect to="/profile" />
  }

  return (
    <>
      <h1>Login</h1>

      <LoginReduxForm onSubmit={onSubmit} />

      {/* <div>
			<a href="https://social-network.samuraijs.com/login" target="_blank" rel="noreferrer">Войдите в свой аккаунт</a>
		</div> */}
    </>
  )
}

export default Login
