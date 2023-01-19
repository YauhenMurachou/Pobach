import { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Myposts from 'src/components/profile/myposts/Myposts';
import {
  InitialStateProfileType,
  profileActions,
  ProfileActionsTypes,
} from 'src/redux/profilePageReducer';

const mapStateToProps = (state: { profilePage: InitialStateProfileType }) => ({
  postsData: state.profilePage.postsData,
});

const mapDispatchToProps = (dispatch: Dispatch<ProfileActionsTypes>) => ({
  addPostButton: (newPost: string) => {
    dispatch(profileActions.addPostActionCreator(newPost));
  },
});

const MypostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Myposts as FC);

export default MypostsContainer;
