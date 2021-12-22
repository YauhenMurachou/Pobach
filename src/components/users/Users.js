import axios from 'axios';
import React from 'react';

let Users = (props) => {
	console.log('Users---', props.users.length)

	if (props.users.length === 0) {
		axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
			props.setUsers(response.data.items)
		})
	}

	return <div>
		{
			props.users.map(user =>
				<div key={user.id}>
					<span> {user.name} </span>
					<span> {user.city} </span>
					<span> {user.country}</span>
					<div>
						{user.isFollowed ? <button onClick={() => { props.unfollowUsers(user.id) }}>unfollow</button>
							: <button onClick={() => { props.followUsers(user.id) }}>follow</button>}
					</div>

				</div>
			)
		}
	</div>

};

export default Users;