import React from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import { withRouter } from "react-router-dom"

import Profile from "./Profile"
import {
  setUserProfileThunkCreator,
  getStatusThunkCreator,
  updateStatusThunkCreator
} from "../../redux/profilePageReducer"
import withAuthRedirect from "../hoc/withAuthRedirect"

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.userId
    }
    this.props.setUserProfile(userId)
    this.props.getStatus(userId)
  }

  componentDidMount() {
    // this.props.setMyProfile()
    // console.log('ProfileContainer', this.props)
    this.refreshProfile()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile()
    }
  }

  render() {
    return (
      <>
        <Profile {...this.props} profile={this.props.profile} />
      </>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  userId: state.auth.userId
})

export default compose(
  connect(mapStateToProps, {
    setUserProfile: setUserProfileThunkCreator,
    getStatus: getStatusThunkCreator,
    updateStatus: updateStatusThunkCreator
    // setMyProfile: setUserDataThunkCreator
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)
