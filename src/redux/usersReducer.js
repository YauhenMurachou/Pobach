import React from 'react';
import ReactDOM from 'react-dom';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
	users: [
		// 	{ name: 'Yauhen', id: 1, isFollowed: true, city: 'Vitebsk', country: 'Belarus' },
		// 	{ name: 'Viktor', id: 2, isFollowed: false, city: 'Minsk', country: 'Belarus' },
		// 	{ name: 'Dergey', id: 3, isFollowed: true, city: 'Kiev', country: 'Ukraine' }
	]
};

const usersReducer = (state = initialState, action) => {

	console.log('setUsersActionCreator---', action.users)

	switch (action.type) {

		case FOLLOW: {
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return { ...user, isFollowed: true }
					}
					return user
				}
				)
			}
		}

		case UNFOLLOW: {
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return { ...user, isFollowed: false }
					}
					return user
				}
				)
			}
		}

		case SET_USERS: {
			return { ...state, users: [...state.users, ...action.users] }
		}

		default:
			return state;
	}
}

export let followActionCreator = (userId) => {
	return { type: FOLLOW, userId }
}

export let unfollowActionCreator = (userId) => {
	return { type: UNFOLLOW, userId }
}

export let setUsersActionCreator = (users) => {


	return { type: SET_USERS, users }
}

export default usersReducer;
