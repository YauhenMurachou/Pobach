import { connect } from 'react-redux';
import { RootState } from '../../redux/redux-store';

import {
  getUsersThunkCreator,
  unfollowUsersThunkCreator,
  followUsersThunkCreator,
  actions,
} from '../../redux/usersReducer';
import { UserType } from '../../types';
import UsersClass from './UsersClass';

const mapStateToProps = (state?: RootState) => {
  return {
    users: state?.usersPage.users as UserType[],
    pageSize: state?.usersPage.pageSize as number,
    totalUsersCount: state?.usersPage.totalUsersCount as number,
    currentPage: state?.usersPage.currentPage as number,
    isFetching: state?.usersPage.isFetching as boolean,
    followingInProgress: state?.usersPage.followingInProgressUsers as number[],
  };
};

const UsersContainer = connect(mapStateToProps, {
  setTotalUsersCount: actions.setTotalUsersCountActionCreator,
  setFollowingInProgress: actions.setFollowingInProgressActionCreator,
  getUsers: getUsersThunkCreator,
  followUsers: followUsersThunkCreator,
  unfollowUsers: unfollowUsersThunkCreator,
})(UsersClass);

export default UsersContainer;
