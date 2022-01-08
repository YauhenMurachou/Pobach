import React from 'react';
import { connect } from 'react-redux';

import {
	followActionCreator, unfollowActionCreator, setUsersActionCreator,
	setCurrentPageActionCreator, setTotalUsersCountActionCreator
} from '../../redux/usersReducer';
import UsersC from './UsersС';

let mapStateToProps = (state) => {

	console.log('users-mapStateToProps--', state.usersPage.users)
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		followUsers: (userId) => {
			dispatch(followActionCreator(userId))
		},
		unfollowUsers: (userId) => {
			dispatch(unfollowActionCreator(userId))
		},
		setUsers: (users) => {
			dispatch(setUsersActionCreator(users))
		},
		setCurrentPage: (pageNumber) => {
			dispatch(setCurrentPageActionCreator(pageNumber))
		},
		setTotalUsersCount: (totalUsersCount) => {
			dispatch(setTotalUsersCountActionCreator(totalUsersCount))
		}
	}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)

export default UsersContainer;