import React from 'react';

import Users from './Users';
import Loader from '../loader/Loader';

class UsersClass extends React.Component {	

	constructor(props) {
		super(props)
	}

	componentDidMount() {

		// componentDidMount() вызывается сразу после монтирования (то есть, вставки компонента в DOM).
		// В этом методе должны происходить действия, которые требуют наличия DOM-узлов.
		//  Это хорошее место для создания сетевых запросов.
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
	}

	onPageChange = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.pageSize)
	}

	render() {
		console.log('currentPage---3', this.props.currentPage)
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

export default UsersClass;