import React from 'react';
import axios from 'axios';

import classes from './Users.module.css';

import avatar from '../../../src/images/avatar.png'

class UsersC extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
		if (this.props.users.length === 0) {
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
				.then(response => {
					this.props.setUsers(response.data.items)
					this.props.setTotalUsersCount(response.data.totalCount)
				})
		}
	}

	onPageChange = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items)
			})
	}

	render() {

		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

		let pages = [];

		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i)
		}

		return <>

			<div>
				{pages.map(p => {
					return <span className={this.props.currentPage === p && classes.selected}
						onClick={() => { this.onPageChange(p) }}> {p} </span>

				})}
			</div>

			{

				this.props.users.map(user =>

					<div key={user.id} className={classes.item}>

						<img src={user.photos.small != null ? user.photos.small : avatar} className={classes.avatar} />
						<span> {user.name} </span>
						<span> id: {user.id} </span>
						<span> {user.city} </span>
						<span> {user.country}</span>
						<span> {user.status}</span>
						<div>
							{user.followed ? <button onClick={() => { this.props.unfollowUsers(user.id) }}>unfollow</button>
								: <button onClick={() => { this.props.followUsers(user.id) }}>follow</button>}
						</div>

					</div>
				)
			}
		</>
	}

};

export default UsersC;