import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Users.module.css';

import avatar from '../../../src/images/avatar.png'

let Users = (props) => {

	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

	let pages = [];

	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

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
						{user.followed ? <button onClick={() => { props.unfollowUsers(user.id) }}>unfollow</button>
							: <button onClick={() => { props.followUsers(user.id) }}>follow</button>}
					</div>

				</div>
			)
		}
	</>

};

export default Users;