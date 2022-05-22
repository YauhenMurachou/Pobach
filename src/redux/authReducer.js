import { usersApi } from '../api/api';

import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
	isAuth: null,
	userId: null,
	email: null,
	login: null
};

export const authReducer = (state = initialState, action) => {

	switch (action.type) {

		case SET_USER_DATA: {
			return {
				...state,
				...action.data
			}
		}

		default:
			return state;
	}
}

export const setUserDataActionCreator = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } })

export const setUserDataThunkCreator = () => {
	return (dispatch) => {
		usersApi.setLogin().then(data => {

			if (data.resultCode === 0) {
				let { userId, email, login } = data.data;
				dispatch(setUserDataActionCreator(userId, email, login, true))
			}
		})
	}
}

export const loginDataThunkCreator = (email, password, rememberMe) => {

	return (dispatch) => {
		usersApi.login(email, password, rememberMe).then(data => {

			if (data.resultCode === 0) {
				dispatch(setUserDataThunkCreator())
			} else {
				const message = data.messages.length > 0 ? data.messages[0] : 'Какая-то ошибка хз'
				dispatch(stopSubmit('login', { _error: message }))
			}
		})
	}
}

export const logoutDataThunkCreator = () => {
	return (dispatch) => {
		usersApi.logout().then(data => {

			if (data.resultCode === 0) {
				dispatch(setUserDataActionCreator(null, null, null, true))
			}
		})
	}
}


