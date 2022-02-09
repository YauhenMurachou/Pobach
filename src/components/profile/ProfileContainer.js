import React from 'react';
import axios from 'axios';

import Profile from './Profile';
import { setUserProfileActionCreator } from '../../redux/profilePageReducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
// import { useEffect } from 'react';

class ProfileContainer extends React.Component {

	componentDidMount() {
		
		let userId = this.props.match.params.userId

		console.log('ProfileContainer', this.props, userId)

		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
			.then(response => {
				this.props.setUserProfile(response.data)
			})
	}

	// useEffect(() => {
	// 	let userId = props.match.params.userId

	// 	axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
	// 		.then(response => {
	// 			props.setUserProfile(response.data)
	// 		})
	// }, []);

	render() {
		return <>
			<Profile {...this.props} profile={this.props.profile} />
		</>
	}
};

let mapStateToProps = (state) => ({ profile: state.profilePage.profile })

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile: setUserProfileActionCreator })(WithUrlDataContainerComponent);