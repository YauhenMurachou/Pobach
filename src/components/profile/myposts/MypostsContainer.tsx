import { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import {
  addPostActionCreator,
  InitialStateProfileType,
  AddPostActionType,
} from '../../../redux/profilePageReducer';

import Myposts from './Myposts';

const mapStateToProps = (state: { profilePage: InitialStateProfileType }) => {
  return {
    postsData: state.profilePage.postsData,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AddPostActionType>) => {
  return {
    addPostButton: (newPost: string) => {
      dispatch(addPostActionCreator(newPost));
    },
  };
};

const MypostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Myposts as FC);

export default MypostsContainer;
