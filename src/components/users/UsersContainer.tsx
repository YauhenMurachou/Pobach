import { connect, RootStateOrAny } from "react-redux"

import {
  setTotalUsersCountActionCreator,
  setFollowingInProgressActionCreator,
  getUsersThunkCreator,
  unfollowUsersThunkCreator,
  followUsersThunkCreator
} from "../../redux/usersReducer"

import UsersClass from "./UsersClass"

const mapStateToProps = (state: RootStateOrAny) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

const UsersContainer = connect(mapStateToProps, {
  setTotalUsersCount: setTotalUsersCountActionCreator,
  setFollowingInProgress: setFollowingInProgressActionCreator,
  getUsers: getUsersThunkCreator,
  followUsers: followUsersThunkCreator,
  unfollowUsers: unfollowUsersThunkCreator
})(UsersClass)

export default UsersContainer
