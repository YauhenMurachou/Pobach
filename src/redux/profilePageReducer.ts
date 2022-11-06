import { profileApi } from '../api/api';
import { ThunkAction } from 'redux-thunk';
import { RootState } from './redux-store';
import { Dispatch } from 'react';
import { ProfileType } from '../types';

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const GET_STATUS = 'GET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';
const SEND_PHOTO = 'SEND_PHOTO';

export type AddPostActionType = {
  type: typeof ADD_POST;
  newPost: string;
};

type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE;
  profile: object;
};

type GetStatusActionType = {
  type: typeof GET_STATUS;
  status: string;
};

export type UpdateStatusActionType = {
  type: typeof UPDATE_STATUS;
  status: string;
};

export type SendPhotoActionType = {
  type: typeof SEND_PHOTO;
  file: HTMLImageElement;
};

type ProfileActionsTypes =
  | SendPhotoActionType
  | UpdateStatusActionType
  | GetStatusActionType
  | SetUserProfileActionType
  | AddPostActionType;

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

export const addPostActionCreator = (newPost: string): AddPostActionType => {
  return { type: ADD_POST, newPost };
};

export const setUserProfileActionCreator = (
  profile: object
): SetUserProfileActionType => {
  return { type: SET_USER_PROFILE, profile };
};

export const getStatusActionCreator = (status: string): GetStatusActionType => {
  return { type: GET_STATUS, status };
};

export const updateStatusActionCreator = (
  status: string
): UpdateStatusActionType => {
  return { type: UPDATE_STATUS, status };
};

export const sendPhotoActionCreator = (
  file: HTMLImageElement
): SendPhotoActionType => {
  return { type: SEND_PHOTO, file };
};

//thunk-creatorы

export const setUserProfileThunkCreator = (
  userId: number | null
): ThunkAction<void, RootState, unknown, SetUserProfileActionType> => {
  return (dispatch) => {
    profileApi.getProfile(userId).then((data) => {
      dispatch(setUserProfileActionCreator(data));
    });
  };
};

export const editProfileThunkCreator = (
  profile: ProfileType
): ThunkAction<void, RootState, unknown, SetUserProfileActionType> => {
  return (dispatch, getState) => {
    const userId = getState().auth.userId;
    profileApi.editProfileInfo(profile).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setUserProfileThunkCreator(userId));
      }
    });
  };
};

export const getStatusThunkCreator = (userId: number) => {
  return (dispatch: Dispatch<GetStatusActionType>) => {
    profileApi.getStatus(userId).then((data) => {
      dispatch(getStatusActionCreator(data));
    });
  };
};

export const updateStatusThunkCreator = (status: string) => {
  return (dispatch: Dispatch<UpdateStatusActionType>) => {
    profileApi.updateStatus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(updateStatusActionCreator(status));
      }
    });
  };
};

export const sendPhotoThunkCreator = (file: string | Blob) => {
  return (dispatch: Dispatch<SendPhotoActionType>) => {
    profileApi.sendPhoto(file).then((data) => {
      if (data.resultCode === 0) {
        dispatch(sendPhotoActionCreator(data.data.photos));
      }
    });
  };
};

export default profilePageReducer;
