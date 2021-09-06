import React from 'react';
import Myposts from './myposts/Myposts';
import ProfileInfo from './myposts/post/profileInfo/ProfileInfo';
import classes from './Profile.module.css'

const Profile = () => {
	return <div className={classes.content}>
		<ProfileInfo />
		<Myposts />
	</div>
};

export default Profile;