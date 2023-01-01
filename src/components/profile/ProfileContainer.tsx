import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import Profile from './Profile';
import {
  setUserProfileThunkCreator,
  getStatusThunkCreator,
  updateStatusThunkCreator,
  sendPhotoThunkCreator,
  ProfileActionsTypes,
} from '../../redux/profilePageReducer';
import withAuthRedirect from '../hoc/withAuthRedirect';
import { ProfileType } from '../../types';
import {
  // setUserDataThunkCreator,
  AuthActionsType,
} from '../../redux/authReducer';
import { CommonThunkType } from '../../redux/redux-store';

export type Props = {
  userId: number;
  setUserProfile: (userId: number) => void;
  getStatus: (userId: number) => void;
  match: { params: { userId: number } };
  profile: ProfileType;
  updateStatus: (
    status: string
  ) => (dispatch: React.Dispatch<ProfileActionsTypes>) => void;
  sendPhoto: (
    file: string | Blob
  ) => (dispatch: React.Dispatch<ProfileActionsTypes>) => void;
  status: string;
  setMyProfile: () => CommonThunkType<AuthActionsType>;
};

class ProfileContainer extends React.Component<Props> {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.userId;
    }
    this.props.setUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    // this.props.setMyProfile();
    this.refreshProfile();
  }

  componentDidUpdate(prevProps: { match: { params: { userId: number } } }) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        isOwner={+this.props.match.params.userId === this.props.userId}
      />
    );
  }
}

const mapStateToProps = (state: {
  profilePage: { profile: ProfileType; status: string };
  auth: { userId: number };
}) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  userId: state.auth.userId,
});

export default compose(
  connect(mapStateToProps, {
    setUserProfile: setUserProfileThunkCreator,
    getStatus: getStatusThunkCreator,
    updateStatus: updateStatusThunkCreator,
    sendPhoto: sendPhotoThunkCreator,
    // setMyProfile: setUserDataThunkCreator,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer) as React.ComponentType;
