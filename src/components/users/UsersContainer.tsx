import { connect } from 'react-redux';
import { RootState } from '../../redux/redux-store';

import {
  getUsersThunkCreator,
  unfollowUsersThunkCreator,
  followUsersThunkCreator,
  actions,
} from '../../redux/usersReducer';
import UsersClass from './UsersClass';

const mapStateToProps = (state: RootState) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgressUsers,
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
