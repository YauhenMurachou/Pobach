import { usersApi } from "../api/api"

const FOLLOW = "FOLLOW"
type followType = {
  type: typeof FOLLOW
  userId: number
}

const UNFOLLOW = "UNFOLLOW"
type unfollowType = {
  type: typeof UNFOLLOW
  userId: number
}

const SET_USERS = "SET_USERS"
type setUsersType = {
  type: typeof SET_USERS
  users: Array<object>
}

const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
type setCurrentPageType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}

const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
type setTotalUsersCountType = {
  type: typeof SET_TOTAL_USERS_COUNT
  totalUsersCount: number
}

const SET_IS_FETCHING = "SET_IS_FETCHING"
type setIsFetchingType = {
  type: typeof SET_IS_FETCHING
  isFetching: boolean
}

const FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS"
type setFollowingInProgressType = {
  type: typeof FOLLOWING_IN_PROGRESS
  followingInProgress: boolean
  userId: number
}

export type userType = {
  id: number
  name?: string
  status?: string
  photos?: { small: string; large: string }
  followed?: boolean
  city?: boolean
  country?: boolean
}

type initialStateUsersType = {
  users: Array<userType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: []
}

const initialState = {
  users: [],
  pageSize: 30,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
}

const usersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((user: userType) => {
          if (user.id === action.userId) {
            return { ...user, followed: true }
          }
          return user
        })
      }
    }

    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((user: { id: number }) => {
          if (user.id === action.userId) {
            return { ...user, followed: false }
          }
          return user
        })
      }
    }

    case SET_USERS: {
      return { ...state, users: [...action.users] }
    }

    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }

    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.totalUsersCount }
    }

    case SET_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }

    case FOLLOWING_IN_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId)
      }
    }

    default:
      return state
  }
}

export let followActionCreator = (userId: number): followType => ({ type: FOLLOW, userId })

export let unfollowActionCreator = (userId: number): unfollowType => ({ type: UNFOLLOW, userId })

export let setUsersActionCreator = (users: Array<object>): setUsersType => ({
  type: SET_USERS,
  users
})

export let setCurrentPageActionCreator = (currentPage: number): setCurrentPageType => ({
  type: SET_CURRENT_PAGE,
  currentPage
})

export let setTotalUsersCountActionCreator = (totalUsersCount: number): setTotalUsersCountType => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount
})

export let setIsFetchingActionCreator = (isFetching: boolean): setIsFetchingType => ({
  type: SET_IS_FETCHING,
  isFetching
})

export let setFollowingInProgressActionCreator = (
  followingInProgress: boolean,
  userId: number
): setFollowingInProgressType => ({
  type: FOLLOWING_IN_PROGRESS,
  followingInProgress,
  userId
})

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
  return (dispatch: Function) => {
    dispatch(setIsFetchingActionCreator(true))
    usersApi.getUsers(currentPage, pageSize).then((data) => {
      dispatch(setCurrentPageActionCreator(currentPage))
      dispatch(setIsFetchingActionCreator(false))
      dispatch(setUsersActionCreator(data.items))
      dispatch(setTotalUsersCountActionCreator(data.totalCount))
    })
  }
}

export const unfollowUsersThunkCreator = (userId: number) => {
  return (dispatch: Function) => {
    dispatch(setFollowingInProgressActionCreator(true, userId))
    usersApi.unFollowUsers(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollowActionCreator(userId))
      }
      dispatch(setFollowingInProgressActionCreator(false, userId))
    })
  }
}

export const followUsersThunkCreator = (userId: number) => {
  return (dispatch: Function) => {
    dispatch(setFollowingInProgressActionCreator(true, userId))
    usersApi.followUsers(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(followActionCreator(userId))
      }
      dispatch(setFollowingInProgressActionCreator(false, userId))
    })
  }
}

export default usersReducer
