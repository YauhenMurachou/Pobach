import React from 'react';
import { connect } from 'react-redux';

import Profile from './Profile';
import { setUserProfileThunkCreator } from '../../redux/profilePageReducer';
// import { setUserDataThunkCreator } from '../../redux/authReducer';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import withAuthRedirect from '../hoc/withAuthRedirect';
// import { useEffect } from 'react';

class ProfileContainer extends React.Component {

	componentDidMount() {
		// this.props.setAuthUserData()
		// console.log('ProfileContainer---', this.props)

		let userId = this.props.match.params.userId

		this.props.setUserProfile(userId)
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

let AuthRedirectLogin = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(AuthRedirectLogin)

export default connect(mapStateToProps, {
	setUserProfile: setUserProfileThunkCreator
	// setAuthUserData: setUserDataThunkCreator
})(WithUrlDataContainerComponent);