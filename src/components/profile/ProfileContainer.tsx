import { Component, ComponentType, Dispatch } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import withAuthRedirect from 'src/components/hoc/withAuthRedirect';
import { AuthActionsType } from 'src/redux/authReducer';
import {
  getStatusThunkCreator,
  ProfileActionsTypes,
  sendPhotoThunkCreator,
  setUserProfileThunkCreator,
  updateStatusThunkCreator,
} from 'src/redux/profilePageReducer';
import { CommonThunkType } from 'src/redux/redux-store';
import { ProfileType } from 'src/types';

import Profile from './Profile';

export type Props = {
  userId: number;
  setUserProfile: (userId: number) => void;
  getStatus: (userId: number) => void;
  match: { params: { userId: number } };
  profile: ProfileType;
  updateStatus: (
    status: string
  ) => (dispatch: Dispatch<ProfileActionsTypes>) => void;
  sendPhoto: (
    file: string | Blob
  ) => (dispatch: Dispatch<ProfileActionsTypes>) => void;
  status: string;
  setMyProfile: () => CommonThunkType<AuthActionsType>;
};

class ProfileContainer extends Component<Props> {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.userId;
    }
    this.props.setUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
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
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer) as ComponentType;
