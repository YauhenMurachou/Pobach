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
			axios.get('https://social-network.samuraijs.com/api/1.0/users')
				.then(response => {
					this.props.setUsers(response.data.items)
				})
		}
	}

	render() {
		return <>

			{
				this.props.users.map(user =>

					<div key={user.id} className={classes.item}>
						<span>{user.photos.small ? <img src='user.photos' />
							: <img src={avatar} className={classes.avatar} />}</span>

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