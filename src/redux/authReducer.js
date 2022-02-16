import React from 'react';

import usersApi from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false
};

const authReducer = (state = initialState, action) => {

	switch (action.type) {

		case SET_USER_DATA: {
			return {
				...state,
				...action.data,
				isAuth: true
			}
		}

		default:
			return state;
	}
}

export let setUserDataActionCreator = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } })

export const setUserDataThunkCreator = () => {
	return (dispatch) => {
		usersApi.setLogin().then(data => {

			if (data.resultCode === 0) {
				let { userId, email, login } = data.data;
				dispatch(setUserDataActionCreator(userId, email, login))
			}
		})
	}
}


export default authReducer;
