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
  users: state.users.users,
  pageSize: state.users.pageSize,
  totalUsersCount: state.users.totalUsersCount,
  currentPage: state.users.currentPage,
  isFetching: state.users.isFetching,
  followingInProgress: state.users.followingInProgressUsers,
});

const UsersContainer = connect(mapStateToProps, {
  setTotalUsersCount: actions.setTotalUsersCountActionCreator,
  setFollowingInProgress: actions.setFollowingInProgressActionCreator,
  getUsers: getUsersThunkCreator,
  followUsers: followUsersThunkCreator,
  unfollowUsers: unfollowUsersThunkCreator,
})(UsersClass);

export default UsersContainer;
