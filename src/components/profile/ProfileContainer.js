import React from 'react';
import axios from 'axios';

import Profile from './Profile';
import { setUserProfileActionCreator } from '../../redux/profilePageReducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

class ProfileContainer extends React.Component {

	componentDidMount() {

		console.log('ProfileContainer', this.props)
		let userId = this.props.match.params.userId

		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile: setUserProfileActionCreator })(WithUrlDataContainerComponent);