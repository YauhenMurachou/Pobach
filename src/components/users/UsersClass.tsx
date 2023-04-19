import React from 'react';
import Loader from 'src/components/loader/Loader';
import Users from 'src/components/users/Users';

import { UserType } from '../../types';

type PropsType = {
  currentPage: number;
  pageSize: number;
  getUsers: (currentPage: number, pageSize: number) => void;
  pageNumber?: number;
  isFetching: boolean;
  users: UserType[];
  totalUsersCount: number;
  unfollowUsers: (id: number) => void;
  followUsers: (id: number) => void;
  followingInProgress: number[];
  // setFollowingInProgress: any;
};

class UsersClass extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChange = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    const {
      isFetching,
      totalUsersCount,
      pageSize,
      currentPage,
      users,
      unfollowUsers,
      followUsers,
      followingInProgress,
    } = this.props;
    return (
      <>
        {isFetching && <Loader isFetching={isFetching} />}
        <Users
          totalUsersCount={totalUsersCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.onPageChange}
          unfollowUsers={unfollowUsers}
          followUsers={followUsers}
          users={users}
          followingInProgress={followingInProgress}
          // setFollowingInProgress={this.props.setFollowingInProgress}
        />
      </>
    );
  }
}

export default UsersClass;
