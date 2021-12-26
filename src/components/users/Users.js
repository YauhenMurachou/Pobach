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
	

	// 	if (props.users.length === 0) {
	// 		props.setUsers(
	// // load hardcode users I don't know why twice
	// 			[{ name: 'Yauhen', id: 1, followed: true, city: 'Vitebsk', country: 'Belarus', photos: { small: null } },
	// 			{ name: 'Viktor', id: 2, followed: false, city: 'Minsk', country: 'Belarus', photos: { small: null } },
	// 			{ name: 'Dergey', id: 3, followed: true, city: 'Kiev', country: 'Ukraine', photos: { small: null } }]
	// 		)
	// 	}



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