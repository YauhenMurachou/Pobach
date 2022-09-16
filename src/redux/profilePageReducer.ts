import { profileApi } from '../api/api';
import { ThunkAction } from 'redux-thunk';
import { RootState } from './redux-store';

const ADD_POST = 'ADD_POST';
type addPostActionType = {
  type: typeof ADD_POST;
  newPost: string;
};

const SET_USER_PROFILE = 'SET_USER_PROFILE';
type setUserProfileActionType = {
  type: typeof SET_USER_PROFILE;
  profile: object;
};

const GET_STATUS = 'GET_STATUS';
type getStatusActionType = {
  type: typeof GET_STATUS;
  status: string;
};

const UPDATE_STATUS = 'UPDATE_STATUS';
type updateStatusActionType = {
  type: typeof UPDATE_STATUS;
  status: string;
};

const SEND_PHOTO = 'SEND_PHOTO';
type sendPhotoActionType = {
  type: typeof SEND_PHOTO;
  file: any;
};

export type contactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};

export type profileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: boolean;
  fullName: boolean;
  contacts: contactsType;
  photos: { small: string; large: string } | null;
};

type initialStateType = {
  postsData: typeof initialState.postsData;
  profile: profileType | null;
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
  action: any
): initialStateType => {
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
      // @ts-ignore
      return { ...state, profile: { profileCopy, photos: action.file } };
    }

    default:
      return state;
  }
};

export const addPostActionCreator = (newPost: string): addPostActionType => {
  return { type: ADD_POST, newPost };
};

export const setUserProfileActionCreator = (
  profile: object
): setUserProfileActionType => {
  return { type: SET_USER_PROFILE, profile };
};

export const getStatusActionCreator = (status: string): getStatusActionType => {
  return { type: GET_STATUS, status };
};

export const updateStatusActionCreator = (
  status: string
): updateStatusActionType => {
  return { type: UPDATE_STATUS, status };
};

export const sendPhotoActionCreator = (file: any): sendPhotoActionType => {
  return { type: SEND_PHOTO, file };
};

//thunk-creatorы

export const setUserProfileThunkCreator = (
  userId: number
): ThunkAction<void, RootState, unknown, setUserProfileActionType> => {
  return (dispatch: Function) => {
    profileApi.getProfile(userId).then((data) => {
      dispatch(setUserProfileActionCreator(data));
    });
  };
};

export const editProfileThunkCreator = (
  profile: object
): ThunkAction<void, RootState, unknown, setUserProfileActionType> => {
  return (dispatch: Function, getState: Function) => {
    const userId = getState().auth.userId;
    profileApi.editProfileInfo(profile).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setUserProfileThunkCreator(userId));
      }
    });
  };
};

export const getStatusThunkCreator = (userId: number) => {
  return (dispatch: Function) => {
    profileApi.getStatus(userId).then((data) => {
      dispatch(getStatusActionCreator(data));
    });
  };
};

export const updateStatusThunkCreator = (status: string) => {
  return (dispatch: Function) => {
    profileApi.updateStatus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(updateStatusActionCreator(status));
      }
    });
  };
};

export const sendPhotoThunkCreator = (file: any) => {
  return (dispatch: Function) => {
    profileApi.sendPhoto(file).then((data) => {
      if (data.resultCode === 0) {
        dispatch(sendPhotoActionCreator(data.data.photos));
      }
    });
  };
};

export default profilePageReducer;
