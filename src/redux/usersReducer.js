import React from 'react';
import ReactDOM from 'react-dom';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
	users: [
	
	// 		{ name: 'Yauhen', id: 1, followed: true, city: 'Vitebsk', country: 'Belarus', photos: {
	// 			small: null
	// 		} },
	// 		{ name: 'Viktor', id: 2, followed: false, city: 'Minsk', country: 'Belarus', photos: {
	// 			small: null
	// 		} },
	// 		{ name: 'Dergey', id: 3, followed: true, city: 'Kiev', country: 'Ukraine', photos: {
	// 			small: null
	// 		} }
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
						return { ...user, followed: true }
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
						return { ...user, followed: false }
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

export let followActionCreator = (userId) => ({ type: FOLLOW, userId })

export let unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId })

export let setUsersActionCreator = (users) => ({ type: SET_USERS, users })

export default usersReducer;
