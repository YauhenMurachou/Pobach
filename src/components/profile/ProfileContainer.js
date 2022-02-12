import React from 'react';
import { connect } from 'react-redux';

import Profile from './Profile';
import { setUserProfileActionCreator } from '../../redux/profilePageReducer';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import usersApi from '../../api/api';
// import { useEffect } from 'react';

class ProfileContainer extends React.Component {

	componentDidMount() {
		
		let userId = this.props.match.params.userId		

		usersApi.getProfile(userId)
			.then(data => {
				this.props.setUserProfile(data)
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