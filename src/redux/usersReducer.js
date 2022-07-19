import { usersApi } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS'

let initialState = {
	users: [],
	pageSize: 20,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {

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
			return { ...state, users: [...action.users] }
		}

		case SET_CURRENT_PAGE: {
			return { ...state, currentPage: action.currentPage }
		}

		case SET_TOTAL_USERS_COUNT: {
			return { ...state, totalUsersCount: action.totalUsersCount }
		}

		case SET_IS_FETCHING: {
			return { ...state, isFetching: action.isFetching }
		}

		case FOLLOWING_IN_PROGRESS: {
			return (
				{
					...state, followingInProgress:
						action.followingInProgress ? [...state.followingInProgress, action.userId]
							: state.followingInProgress.filter(id => id !== action.userId)
				}
			)
		}

		default:
			return state;
	}
}


export let followActionCreator = (userId) => ({ type: FOLLOW, userId })

export let unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId })

export let setUsersActionCreator = (users) => ({ type: SET_USERS, users })

export let setCurrentPageActionCreator = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })

export let setTotalUsersCountActionCreator = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })

export let setIsFetchingActionCreator = (isFetching) => ({ type: SET_IS_FETCHING, isFetching })

export let setFollowingInProgressActionCreator = (followingInProgress, userId) =>
({
	type: FOLLOWING_IN_PROGRESS,
	followingInProgress, userId
})

export const getUsersThunkCreator = (currentPage, pageSize) => {

	return (dispatch) => {
		dispatch(setIsFetchingActionCreator(true))
		usersApi.getUsers(currentPage, pageSize).then(data => {
			dispatch(setCurrentPageActionCreator(currentPage))
			dispatch(setIsFetchingActionCreator(false))
			dispatch(setUsersActionCreator(data.items))
			dispatch(setTotalUsersCountActionCreator(data.totalCount))
		})
	}
}

export const unfollowUsersThunkCreator = (userId) => {

	return (dispatch) => {
		dispatch(setFollowingInProgressActionCreator(true, userId))
		usersApi.unFollowUsers(userId).then(data => {
			if (data.resultCode === 0) {
				dispatch(unfollowActionCreator(userId))
			}
			dispatch(setFollowingInProgressActionCreator(false, userId))
		})
	}
}

export const followUsersThunkCreator = (userId) => {

	return (dispatch) => {
		dispatch(setFollowingInProgressActionCreator(true, userId))
		usersApi.followUsers(userId).then(data => {
			if (data.resultCode === 0) {
				dispatch(followActionCreator(userId))
			}
			dispatch(setFollowingInProgressActionCreator(false, userId))
		})
	}
}


export default usersReducer;
