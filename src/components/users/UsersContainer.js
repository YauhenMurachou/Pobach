import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import {
	followActionCreator,
	unfollowActionCreator,
	setUsersActionCreator,
	setCurrentPageActionCreator,
	setTotalUsersCountActionCreator,
	setIsFetchingActionCreator
} from '../../redux/usersReducer';

import Users from './Users';
import Loader from '../loader/Loader';

class UsersC extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
		if (this.props.users.length === 0) {
			this.props.setIsFetching(true)
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
				.then(response => {
					this.props.setIsFetching(false)
					this.props.setUsers(response.data.items)
					this.props.setTotalUsersCount(response.data.totalCount)
				})
		}
	}

	onPageChange = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		this.props.setIsFetching(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setIsFetching(false)
				this.props.setUsers(response.data.items)
			})
	}

	render() {

		return <>
			<Loader
				isFetching={this.props.isFetching}
			/>
			<Users
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChange={this.onPageChange}
				unfollowUsers={this.props.unfollowUsers}
				followUsers={this.props.followUsers}
				users={this.props.users}
			/>
		</>
	}

};

let mapStateToProps = (state) => {

	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
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
		},
		setIsFetching: (isFetching) => {
			dispatch(setIsFetchingActionCreator(isFetching))
		}
	}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)

export default UsersContainer;