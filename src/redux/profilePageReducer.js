import { profileApi } from "../api/api"

const ADD_POST = "ADD_POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const GET_STATUS = "GET_STATUS"
const UPDATE_STATUS = "UPDATE_STATUS"
const SEND_PHOTO = "SEND_PHOTO"

const initialState = {
  postsData: [
    { message: "Привет, как дела?", id: 1, likesCount: 0 },
    { message: "Hi! How are you?", id: 2, likesCount: 21 },
    { message: "Прывітанне, як твае справы?", id: 3, likesCount: 16 }
  ],
  profile: null,
  status: ""
}

const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        message: action.newPost,
        id: 5,
        likesCount: 0
      }

      const stateCopy = { ...state }
      stateCopy.postsData = [...state.postsData]
      stateCopy.postsData.push(newPost)
      return stateCopy
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile }
    }

    case GET_STATUS: {
      return { ...state, status: action.status }
    }

    case UPDATE_STATUS: {
      return { ...state, status: action.status }
    }

    case SEND_PHOTO: {
      return { ...state, profile: { ...state.profile, photos: action.file } }
    }

    default:
      return state
  }
}

export const addPostActionCreator = (newPost) => {
  return { type: ADD_POST, newPost }
}

export const setUserProfileActionCreator = (profile) => {
  return { type: SET_USER_PROFILE, profile }
}

export const getStatusActionCreator = (status) => {
  return { type: GET_STATUS, status }
}

export const updateStatusActionCreator = (status) => {
  return { type: UPDATE_STATUS, status }
}

export const sendPhotoActionCreator = (file) => {
  return { type: SEND_PHOTO, file }
}

//thunk-creatorы

export const setUserProfileThunkCreator = (userId) => {
  return (dispatch) => {
    profileApi.getProfile(userId).then((data) => {
      dispatch(setUserProfileActionCreator(data))
    })
  }
}

export const editProfileThunkCreator = (profile) => {
  return (dispatch, getState) => {
    const userId = getState().auth.userId
    profileApi.editProfileInfo(profile).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setUserProfileThunkCreator(userId))
      }
    })
  }
}

export const getStatusThunkCreator = (userId) => {
  return (dispatch) => {
    profileApi.getStatus(userId).then((data) => {
      dispatch(getStatusActionCreator(data))
    })
  }
}

export const updateStatusThunkCreator = (status) => {
  return (dispatch) => {
    profileApi.updateStatus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(updateStatusActionCreator(status))
      }
    })
  }
}

export const sendPhotoThunkCreator = (file) => {
  return (dispatch) => {
    profileApi.sendPhoto(file).then((data) => {
      if (data.resultCode === 0) {
        dispatch(sendPhotoActionCreator(data.data.photos))
      }
    })
  }
}

export default profilePageReducer
