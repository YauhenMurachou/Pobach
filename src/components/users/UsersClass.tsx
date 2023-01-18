import React from 'react';

import Users from './Users';
import Loader from '../loader/Loader';

import { UserType } from '../../types';

export type PropsType = {
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
    // componentDidMount() вызывается сразу после монтирования (то есть, вставки компонента в DOM).
    // В этом методе должны происходить действия, которые требуют наличия DOM-узлов.
    //  Это хорошее место для создания сетевых запросов.
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChange = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching && <Loader isFetching={this.props.isFetching} />}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChange={this.onPageChange}
          unfollowUsers={this.props.unfollowUsers}
          followUsers={this.props.followUsers}
          users={this.props.users}
          followingInProgress={this.props.followingInProgress}
          // setFollowingInProgress={this.props.setFollowingInProgress}
        />
      </>
    );
  }
}

export default UsersClass;
