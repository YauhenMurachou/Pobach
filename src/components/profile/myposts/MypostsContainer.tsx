import { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import {
  profileActions,
  InitialStateProfileType,
  ProfileActionsTypes,
} from '../../../redux/profilePageReducer';

import Myposts from './Myposts';

const mapStateToProps = (state: { profilePage: InitialStateProfileType }) => {
  return {
    postsData: state.profilePage.postsData,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<ProfileActionsTypes>) => {
  return {
    addPostButton: (newPost: string) => {
      dispatch(profileActions.addPostActionCreator(newPost));
    },
  };
};

const MypostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Myposts as FC);

export default MypostsContainer;
