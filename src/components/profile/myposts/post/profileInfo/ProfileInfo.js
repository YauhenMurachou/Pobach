import React from 'react';

import Loader from '../../../../loader/Loader';
import ProfileStatus from './profilleStatus/ProfileStatus';
import avatar from '../../../../../images/avatar.png';

import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {

	if (!props.profile) {
		console.log('ProfileInfo inside--', props)
		return <Loader />
	}

	let objProp = props.profile;
	let info = Object.getOwnPropertyNames(objProp);

	return <>
		<div>
			<img alt='photos' src={props.profile.photos.large ? props.profile.photos.large : avatar} />
		</div>

		{info.map((item, index) => {
			if (objProp[item] && typeof (objProp[item]) !== 'object') {
				return <div key={index}> {item}: {objProp[item]} </div>
			} else {
				return <div key={index}> {item}: No data </div>
			}
		})}

		<div className={classes.item}>
			<ProfileStatus status={props.status} updateStatus={props.updateStatus} />
		</div>
	</>
};

export default ProfileInfo;


