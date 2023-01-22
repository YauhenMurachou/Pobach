import { ResultCodeEnum, usersApi } from 'src/api/api';
import { UserType } from 'src/types';

import { CommonActionTypes, CommonThunkType } from './redux-store';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';

type InitialStateUsersType = {
  users: UserType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgressUsers: number[];
  //TODo is it true type??
};

const initialState: InitialStateUsersType = {
  users: [] as UserType[],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgressUsers: [] as number[],
};

type UserActionsType = CommonActionTypes<typeof actions>;

export const actions = {
  followActionCreator: (userId: number) =>
    ({
      type: FOLLOW,
      userId,
    } as const),

  unfollowActionCreator: (userId: number) =>
    ({
      type: UNFOLLOW,
      userId,
    } as const),

  setUsersActionCreator: (users: UserType[]) =>
    ({
      type: SET_USERS,
      users,
    } as const),

  setCurrentPageActionCreator: (currentPage: number) =>
    ({
      type: SET_CURRENT_PAGE,
      currentPage,
    } as const),

  setTotalUsersCountActionCreator: (totalUsersCount: number) =>
    ({
      type: SET_TOTAL_USERS_COUNT,
      totalUsersCount,
    } as const),

  setIsFetchingActionCreator: (isFetching: boolean) =>
    ({
      type: SET_IS_FETCHING,
      isFetching,
    } as const),

  setFollowingInProgressActionCreator: (
    followingInProgress: boolean,
    userId: number
  ) =>
    ({
      type: FOLLOWING_IN_PROGRESS,
      followingInProgress,
      userId,
    } as const),
};

const usersReducer = (state = initialState, action: UserActionsType) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((user: UserType) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    }

    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((user: UserType) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    }

    case SET_USERS: {
      return { ...state, users: [...action.users] };
    }

    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }

    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.totalUsersCount };
    }

    case SET_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }

    case FOLLOWING_IN_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgressUsers, action.userId]
          : state.followingInProgressUsers.filter((id) => id !== action.userId),
      };
    }

    default:
      return state;
  }
};

export const getUsersThunkCreator =
  (currentPage: number, pageSize: number): CommonThunkType<UserActionsType> =>
  async (dispatch) => {
    dispatch(actions.setIsFetchingActionCreator(true));
    const data = await usersApi.getUsers(currentPage, pageSize);
    dispatch(actions.setCurrentPageActionCreator(currentPage));
    dispatch(actions.setIsFetchingActionCreator(false));
    dispatch(actions.setUsersActionCreator(data.items));
    dispatch(actions.setTotalUsersCountActionCreator(data.totalCount));
  };

export const unfollowUsersThunkCreator =
  (userId: number): CommonThunkType<UserActionsType> =>
  async (dispatch) => {
    dispatch(actions.setFollowingInProgressActionCreator(true, userId));
    const data = await usersApi.unFollowUsers(userId);
    if (data.resultCode === ResultCodeEnum.Success) {
      dispatch(actions.unfollowActionCreator(userId));
    }
    dispatch(actions.setFollowingInProgressActionCreator(false, userId));
  };

export const followUsersThunkCreator =
  (userId: number): CommonThunkType<UserActionsType> =>
  async (dispatch) => {
    dispatch(actions.setFollowingInProgressActionCreator(true, userId));
    const data = await usersApi.followUsers(userId);
    if (data.resultCode === ResultCodeEnum.Success) {
      dispatch(actions.followActionCreator(userId));
    }
    dispatch(actions.setFollowingInProgressActionCreator(false, userId));
  };

export default usersReducer;
