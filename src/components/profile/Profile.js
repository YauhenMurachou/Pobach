import React from 'react';
import MypostsContainer from './myposts/MypostsContainer';
import ProfileInfo from './myposts/post/profileInfo/ProfileInfo';
import classes from './Profile.module.css'

const Profile = (props) => {
	return <div className={classes.content}>
		<ProfileInfo />
		<MypostsContainer 
		// postsData={props.postsData}
		// 	dispatch={props.dispatch}
		// 	newPostText={props.newPostText}
		store={props.store}
		/>
	</div>
};

export default Profile;