import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import Profile from './Profile';
import { setUserProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator } from '../../redux/profilePageReducer';
import { setUserDataThunkCreator } from '../../redux/authReducer';
import withAuthRedirect from '../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {

	
	componentDidMount() {
		// this.props.setMyProfile()
		console.log('ProfileContainer', this.props)
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 17658
		}
		this.props.setUserProfile(userId)
		this.props.getStatus(userId)
	}

	render() {
		return <>
			<Profile {...this.props} profile={this.props.profile} />
		</>
	}
};

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status
	// myId: state.auth.userId
})

export default compose(
	connect(mapStateToProps, {
		setUserProfile: setUserProfileThunkCreator,
		getStatus: getStatusThunkCreator,
		updateStatus: updateStatusThunkCreator
		// setMyProfile: setUserDataThunkCreator
	}),
	withRouter,
	withAuthRedirect)(ProfileContainer);

