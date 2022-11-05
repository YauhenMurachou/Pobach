import { usersApi } from '../api/api';
import { ThunkAction } from 'redux-thunk';

import { UserType } from '../types';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';

type followType = {
  type: typeof FOLLOW;
  userId: number;
};

type unfollowType = {
  type: typeof UNFOLLOW;
  userId: number;
};

type setUsersType = {
  type: typeof SET_USERS;
  users: UserType[];
};

type setCurrentPageType = {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
};

type setTotalUsersCountType = {
  type: typeof SET_TOTAL_USERS_COUNT;
  totalUsersCount: number;
};

type setIsFetchingType = {
  type: typeof SET_IS_FETCHING;
  isFetching: boolean;
};

type setFollowingInProgressType = {
  type: typeof FOLLOWING_IN_PROGRESS;
  followingInProgress: boolean;
  userId: number;
};

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
  users: [],
  pageSize: 30,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgressUsers: [] as number[],
};

type CommonActionType =
  | followType
  | unfollowType
  | setUsersType
  | setCurrentPageType
  | setTotalUsersCountType
  | setIsFetchingType
  | setFollowingInProgressType;

const usersReducer = (state = initialState, action: CommonActionType) => {
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
        users: state.users.map((user: { id: number }) => {
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

export const followActionCreator = (userId: number): followType => ({
  type: FOLLOW,
  userId,
});

export const unfollowActionCreator = (userId: number): unfollowType => ({
  type: UNFOLLOW,
  userId,
});

export const setUsersActionCreator = (users: UserType[]): setUsersType => ({
  type: SET_USERS,
  users,
});

export const setCurrentPageActionCreator = (
  currentPage: number
): setCurrentPageType => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setTotalUsersCountActionCreator = (
  totalUsersCount: number
): setTotalUsersCountType => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});

export const setIsFetchingActionCreator = (
  isFetching: boolean
): setIsFetchingType => ({
  type: SET_IS_FETCHING,
  isFetching,
});

export const setFollowingInProgressActionCreator = (
  followingInProgress: boolean,
  userId: number
): setFollowingInProgressType => ({
  type: FOLLOWING_IN_PROGRESS,
  followingInProgress,
  userId,
});

type ThunkType = ThunkAction<
  Promise<void>,
  InitialStateUsersType,
  unknown,
  CommonActionType
>;

export const getUsersThunkCreator = (
  currentPage: number,
  pageSize: number
): ThunkType => {
  return async (dispatch) => {
    dispatch(setIsFetchingActionCreator(true));
    const data = await usersApi.getUsers(currentPage, pageSize);
    dispatch(setCurrentPageActionCreator(currentPage));
    dispatch(setIsFetchingActionCreator(false));
    dispatch(setUsersActionCreator(data.items));
    dispatch(setTotalUsersCountActionCreator(data.totalCount));
  };
};

export const unfollowUsersThunkCreator = (userId: number): ThunkType => {
  return async (dispatch) => {
    dispatch(setFollowingInProgressActionCreator(true, userId));
    const data = await usersApi.unFollowUsers(userId);
    if (data.resultCode === 0) {
      dispatch(unfollowActionCreator(userId));
    }
    dispatch(setFollowingInProgressActionCreator(false, userId));
  };
};

export const followUsersThunkCreator = (userId: number): ThunkType => {
  return async (dispatch) => {
    dispatch(setFollowingInProgressActionCreator(true, userId));
    const data = await usersApi.followUsers(userId);
    if (data.resultCode === 0) {
      dispatch(followActionCreator(userId));
    }
    dispatch(setFollowingInProgressActionCreator(false, userId));
  };
};

export default usersReducer;
