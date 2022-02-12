import React from 'react';
import { connect } from 'react-redux';

import {
	followActionCreator,
	unfollowActionCreator,
	setUsersActionCreator,
	setCurrentPageActionCreator,
	setTotalUsersCountActionCreator,
	setIsFetchingActionCreator,
	setFollowingInProgressActionCreator
} from '../../redux/usersReducer';

import Users from './Users';
import Loader from '../loader/Loader';
import usersApi from '../../api/api';

class UsersC extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {

		console.log('componentDidMount', this.props)

		// componentDidMount() вызывается сразу после монтирования (то есть, вставки компонента в DOM).
		// В этом методе должны происходить действия, которые требуют наличия DOM-узлов.
		//  Это хорошее место для создания сетевых запросов.
		// if (this.props.users.length === 0) {
		this.props.setIsFetching(true)
		usersApi.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
			this.props.setIsFetching(false)
			this.props.setUsers(data.items)
			this.props.setTotalUsersCount(data.totalCount)
		})
		// }
	}

	onPageChange = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		this.props.setIsFetching(true)
		usersApi.getUsers(pageNumber, this.props.pageSize).then(data => {
			this.props.setIsFetching(false)
			this.props.setUsers(data.items)
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
				followingInProgress={this.props.followingInProgress}
				setFollowingInProgress={this.props.setFollowingInProgress}
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
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress		
	}
}

// Аргумент mapStateToProps является функцией, которая возвращает либо обычный объект, либо другую функцию.
//  Передача этого аргумента connect() приводит к подписке компонента-контейнера на обновления хранилища Redux.
//  Это означает, что функция mapStateToProps будет вызываться каждый раз, когда состояние хранилища изменяется.



// let mapDispatchToProps = (dispatch) => {
// 	return {
// 		followUsers: (userId) => {
// 			dispatch(followActionCreator(userId))
// 		},
// 		unfollowUsers: (userId) => {
// 			dispatch(unfollowActionCreator(userId))
// 		},
// 		setUsers: (users) => {
// 			dispatch(setUsersActionCreator(users))
// 		},
// 		setCurrentPage: (pageNumber) => {
// 			dispatch(setCurrentPageActionCreator(pageNumber))
// 		},
// 		setTotalUsersCount: (totalUsersCount) => {
// 			dispatch(setTotalUsersCountActionCreator(totalUsersCount))
// 		},
// 		setIsFetching: (isFetching) => {
// 			dispatch(setIsFetchingActionCreator(isFetching))
// 		}
// 	}
// }

const UsersContainer = connect(mapStateToProps, {
	followUsers: followActionCreator,
	unfollowUsers: unfollowActionCreator,
	setUsers: setUsersActionCreator,
	setCurrentPage: setCurrentPageActionCreator,
	setTotalUsersCount: setTotalUsersCountActionCreator,
	setIsFetching: setIsFetchingActionCreator,
	setFollowingInProgress: setFollowingInProgressActionCreator
})(UsersC)

// После вызова функции connect() возвращается компонент высшего порядка???,
//  который можно использовать для оборачивания любого компонента React.
// Т.е. здесь в презентационный компонент UsersC
// в качестве пропсов попадают свойства, которые передаются в connect
// Connect эти функции вызывает сам и автоматом передаёт им state и диспатч

export default UsersContainer;