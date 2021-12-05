import React from 'react';
import Myposts from './myposts/Myposts';
import ProfileInfo from './myposts/post/profileInfo/ProfileInfo';
import classes from './Profile.module.css'

const Profile = (props) => {
	return <div className={classes.content}>
		<ProfileInfo />
		<Myposts postsData={props.postsData}
			dispatch={props.dispatch}
			newPostText={props.newPostText}
			
		/>
	</div>
};

export default Profile;