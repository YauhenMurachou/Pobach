import React from 'react';
import axios from 'axios';

import Profile from './Profile';
import { setUserProfileActionCreator } from '../../redux/profilePageReducer';
import { connect } from 'react-redux';

class ProfileContainer extends React.Component {

	componentDidMount() {

		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
			.then(response => {
				this.props.setUserProfile(response.data)
			})
	}

	render() {
		console.log('ProfileContainer', this.props)
		return <>
			<Profile {...this.props}
				profile={this.props.profile} />
		</>
	}
};

let mapStateToProps = (state) => ({ profile: state.profilePage.profile })

export default connect(mapStateToProps, { setUserProfile: setUserProfileActionCreator })(ProfileContainer);