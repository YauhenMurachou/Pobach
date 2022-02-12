import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Users.module.css';

import avatar from '../../../src/images/avatar.png';
import usersApi from '../../api/api';

let Users = (props) => {	

	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	console.log('users', props)

	return <>
		<div>
			{pages.map(p => {
				return <span className={props.currentPage === p && classes.selected}
					onClick={() => { props.onPageChange(p) }}> {p} </span>
			})}
		</div>

		{
			props.users.map(user =>

				<div key={user.id} className={classes.item}>

					<NavLink to={'/profile/' + user.id}><img src={user.photos.small != null ? user.photos.small : avatar} className={classes.avatar} />
					</NavLink>
					<span> {user.name} </span>
					<span> id: {user.id} </span>
					<span> {user.city} </span>
					<span> {user.country}</span>
					<span> {user.status}</span>
					<div>
						{user.followed
							? <button disabled={props.followingInProgress}
								onClick={() => {

									props.setFollowingInProgress(true)
									usersApi.unFollowUsers(user.id).then(data => {
										if (data.resultCode === 0) {
											props.unfollowUsers(user.id)
										}
										props.setFollowingInProgress(false)
									})

								}}>unfollow</button>
							: <button disabled={props.followingInProgress}
								onClick={() => {

									props.setFollowingInProgress(true)
									usersApi.followUsers(user.id, {}).then(data => {
										if (data.resultCode === 0) {
											props.followUsers(user.id)
										}
										props.setFollowingInProgress(false)
									})

								}}>follow</button>}
					</div>
				</div>
			)
		}
	</>

};

export default Users;