import React from 'react';
import { connect } from 'react-redux';

import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from '../../redux/usersReducer';
import UsersC from './UsersС';

let mapStateToProps = (state) => {

	console.log('users-mapStateToProps--', state.usersPage.users)
	return {
		users: state.usersPage.users
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
		}
	}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)

export default UsersContainer;