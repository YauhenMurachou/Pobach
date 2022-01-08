import axios from 'axios';
import React from 'react';

import classes from './Users.module.css';

import avatar from '../../../src/images/avatar.png'

let Users = (props) => {
	console.log('Users---', props.users)


	let getUsers = () => {
		if (props.users.length === 0) {

			axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
				props.setUsers(response.data.items)
			})
		}	
	}
	

	return <>
	<button onClick={getUsers}> Get users</button>
		{
			props.users.map(user =>

				<div key={user.id} className={classes.item}>
					<span>{user.photos.small ? <img src='user.photos' />
						: <img src={avatar} className={classes.avatar} />}</span>

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