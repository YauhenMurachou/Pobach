import { profileApi } from '../api/api';
import { CommonActionTypes, CommonThunkType } from './redux-store';

import { ProfileType } from '../types';

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const GET_STATUS = 'GET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';
const SEND_PHOTO = 'SEND_PHOTO';

export type InitialStateProfileType = {
  postsData: typeof initialState.postsData;
  profile: ProfileType | null | {};
  status: string;
};

const initialState = {
  postsData: [
    { message: 'Привет, как дела?', id: 1, likesCount: 0 },
    { message: 'Hi! How are you?', id: 2, likesCount: 21 },
    { message: 'Прывітанне, як твае справы?', id: 3, likesCount: 16 },
  ],
  profile: null,
  status: '',
};

export const profileActions = {
  addPostActionCreator: (newPost: string) => {
    return { type: ADD_POST, newPost } as const;
  },

  setUserProfileActionCreator: (profile: ProfileType) => {
    return { type: SET_USER_PROFILE, profile } as const;
  },

  getStatusActionCreator: (status: string) => {
    return { type: GET_STATUS, status } as const;
  },

  updateStatusActionCreator: (status: string) => {
    return { type: UPDATE_STATUS, status } as const;
  },

  sendPhotoActionCreator: (file: HTMLImageElement) => {
    return { type: SEND_PHOTO, file } as const;
  },
};

export type ProfileActionsTypes = CommonActionTypes<typeof profileActions>;

const profilePageReducer = (
  state = initialState,
  action: ProfileActionsTypes
): InitialStateProfileType => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        message: action.newPost,
        id: 5,
        likesCount: 0,
      };

      const stateCopy = { ...state };
      stateCopy.postsData = [...state.postsData];
      stateCopy.postsData.push(newPost);
      return stateCopy;
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }

    case GET_STATUS: {
      return { ...state, status: action.status };
    }

    case UPDATE_STATUS: {
      return { ...state, status: action.status };
    }

    case SEND_PHOTO: {
      const profileCopy = state.profile;
      return { ...state, profile: { profileCopy, photos: action.file } };
    }

    default:
      return state;
  }
};

//thunk-creatorы

export const setUserProfileThunkCreator = (
  userId: number | null
): CommonThunkType<ProfileActionsTypes, void> => {
  return (dispatch) => {
    profileApi.getProfile(userId).then((data) => {
      dispatch(profileActions.setUserProfileActionCreator(data));
    });
  };
};

export const editProfileThunkCreator = (
  profile: ProfileType
): CommonThunkType<ProfileActionsTypes, void> => {
  return (dispatch, getState) => {
    const userId = getState().auth.userId;
    profileApi.editProfileInfo(profile).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setUserProfileThunkCreator(userId));
      }
    });
  };
};

export const getStatusThunkCreator = (
  userId: number
): CommonThunkType<ProfileActionsTypes, void> => {
  return (dispatch) => {
    profileApi.getStatus(userId).then((data) => {
      dispatch(profileActions.getStatusActionCreator(data));
    });
  };
};

export const updateStatusThunkCreator = (
  status: string
): CommonThunkType<ProfileActionsTypes, void> => {
  return (dispatch) => {
    profileApi.updateStatus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(profileActions.updateStatusActionCreator(status));
      }
    });
  };
};

export const sendPhotoThunkCreator = (
  file: string | Blob
): CommonThunkType<ProfileActionsTypes, void> => {
  return (dispatch) => {
    profileApi.sendPhoto(file).then((data) => {
      if (data.resultCode === 0) {
        dispatch(profileActions.sendPhotoActionCreator(data.data.photos));
      }
    });
  };
};

export default profilePageReducer;
