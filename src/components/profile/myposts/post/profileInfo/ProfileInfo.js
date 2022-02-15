import React from 'react';

import Loader from '../../../../loader/Loader';

import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {

	if (!props.profile) {
		console.log('ProfileInfo inside--', props)
		return <Loader />
	}

	let info = [];

	for (let prop in props.profile) {
		info.push(prop)
	}

	return <div>
		<div>
			<img className={classes.img} src='https://globe.by/wp-content/uploads/2017/01/Belarus.jpg' />
		</div>


			{/* 
		<div>
		
		</div> */}
	



		<div>
			{info.map(p => {
				return <div> {p} </div>
			})}
		</div>

		<div className={classes.item}>
			{/* <img src={props.profile.photos.large} /> */}
			ava + description
		</div>
	</div>
};

export default ProfileInfo;


