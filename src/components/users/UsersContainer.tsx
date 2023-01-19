import { connect } from 'react-redux';
import UsersClass from 'src/components/users/UsersClass';
import { RootState } from 'src/redux/redux-store';
import {
  actions,
  followUsersThunkCreator,
  getUsersThunkCreator,
  unfollowUsersThunkCreator,
} from 'src/redux/usersReducer';

const mapStateToProps = (state: RootState) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
  followingInProgress: state.usersPage.followingInProgressUsers,
});

const UsersContainer = connect(mapStateToProps, {
  setTotalUsersCount: actions.setTotalUsersCountActionCreator,
  setFollowingInProgress: actions.setFollowingInProgressActionCreator,
  getUsers: getUsersThunkCreator,
  followUsers: followUsersThunkCreator,
  unfollowUsers: unfollowUsersThunkCreator,
})(UsersClass);

export default UsersContainer;
