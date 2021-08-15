import React from 'react';
import Myposts from './myposts/Myposts';
import classes from './Profile.module.css'

const Profile = () => {
	return <div className={classes.content}>
		<div>
			<img className={classes.img} src='https://preferredbynature.org/sites/default/files/styles/1349x450/public/2017-08/Belarus.jpg?itok=pj8jVu65' />
		</div>
		<div className={classes.item}>
			ava + description
		</div>
		<Myposts />
	</div>
};

export default Profile;