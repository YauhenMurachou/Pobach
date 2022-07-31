import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom"
import LoginForm from "./LoginForm"

import { loginDataThunkCreator } from "../../redux/authReducer"

const Login = () => {
  const dispatch = useDispatch()
  const { isAuth } = useSelector((state) => state.auth)
  const LogInFunction = (formData) => {
    dispatch(loginDataThunkCreator(formData.email, formData.password, formData.rememberMe))
  }

  if (isAuth) {
    return <Redirect to="/profile" />
  }

  return (
    <>
      <h1>Login</h1>

      <LoginForm onSubmit={LogInFunction} />

      {/* <div>
			<a href="https://social-network.samuraijs.com/login" target="_blank" rel="noreferrer">Войдите в свой аккаунт</a>
		</div> */}
    </>
  )
}

export default Login
