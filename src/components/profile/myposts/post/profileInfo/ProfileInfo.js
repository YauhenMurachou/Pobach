import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {

	// let info = Object.entries(props.profile);

	let info = [];

	for (let prop in props.profile) {
		info.push(prop)
	}


	// if (props.profile.aboutMe) {
	// 	let aboutMe = props.profile.aboutMe
	// }

	console.log('ProfileInfo', Array.isArray(props.profile), props.profile, info)

	return <div>
		<div>
			<img className={classes.img} src='https://globe.by/wp-content/uploads/2017/01/Belarus.jpg' />
		</div>

		{/* <div>
			<img src={props.profile.map(item => {if(item === 'photos'){return item.large}})} />
		</div> */}
		{/* {props.profile.aboutMe.map(item => <div>{item}</div>)} */}

		<div>
			{info.map(p => {
				return <div> {p} </div>
			})}
		</div>

		<div className={classes.item}>
			ava + description
		</div>
	</div>
};

export default ProfileInfo;


