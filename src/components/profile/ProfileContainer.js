import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import Profile from './Profile';
import { setUserProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator } from '../../redux/profilePageReducer';
import withAuthRedirect from '../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match.params.userId
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
})

export default compose(
	connect(mapStateToProps, {
		setUserProfile: setUserProfileThunkCreator,
		getStatus: getStatusThunkCreator,
		updateStatus: updateStatusThunkCreator
	}),
	withRouter,
	withAuthRedirect)(ProfileContainer);

