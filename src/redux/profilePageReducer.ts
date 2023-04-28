import { profileApi } from 'src/api/api';
import { CommonActionTypes, CommonThunkType } from 'src/redux/redux-store';
import { EditProfileType, ProfileType } from 'src/types';

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const GET_STATUS = 'GET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';
const SEND_PHOTO = 'SEND_PHOTO';
const UPDATE_LIKES = 'UPDATE_LIKES';

type Post = {
  message: string;
  id: number;
  likesCount: number;
  isLike?: boolean;
};

export type InitialStateProfileType = {
  postsData: Post[];
  profile: ProfileType | null;
  status: string;
};

const initialState: InitialStateProfileType = {
  postsData: [
    { message: 'Привет, как дела?', id: 1, likesCount: 0 },
    { message: 'Hi! How are you?', id: 2, likesCount: 0 },
    { message: 'Прывітанне, як твае справы?', id: 3, likesCount: 0 },
  ],
  profile: null,
  status: '',
};

export const profileActions = {
  addPostActionCreator: (newPost: string) =>
    ({ type: ADD_POST, newPost } as const),

  setUserProfileActionCreator: (profile: ProfileType) =>
    ({ type: SET_USER_PROFILE, profile } as const),

  getStatusActionCreator: (status: string) =>
    ({ type: GET_STATUS, status } as const),

  updateStatusActionCreator: (status: string) =>
    ({ type: UPDATE_STATUS, status } as const),

  sendPhotoActionCreator: (file: ProfileType['photos']) =>
    ({ type: SEND_PHOTO, file } as const),
  updateLikesActionCreator: (post: Post) =>
    ({ type: UPDATE_LIKES, post } as const),
};

export type ProfileActionsTypes = CommonActionTypes<typeof profileActions>;

export const profilePageReducer = (
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

    case UPDATE_LIKES: {
      const postsDataCopy = [...state.postsData];
      const updatedIndex = postsDataCopy.findIndex(
        (post) => post.id === action.post.id
      );
      postsDataCopy[updatedIndex] = action.post;
      return {
        ...state,
        postsData: postsDataCopy,
      };
    }

    case SEND_PHOTO: {
      const profileCopy = state.profile;
      return {
        ...state,
        profile: {
          ...profileCopy,
          photos: action.file,
        } as ProfileType,
      };
    }

    default:
      return state;
  }
};

//thunk-creatorы

export const setUserProfileThunkCreator =
  (userId: number | null): CommonThunkType<ProfileActionsTypes, void> =>
  (dispatch) => {
    profileApi.getProfile(userId).then((data) => {
      dispatch(profileActions.setUserProfileActionCreator(data));
    });
  };

export const editProfileThunkCreator =
  (profile: EditProfileType): CommonThunkType<ProfileActionsTypes, void> =>
  (dispatch, getState) => {
    const userId = getState().auth.userId;
    profileApi.editProfileInfo(profile).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setUserProfileThunkCreator(userId));
      }
    });
  };

export const getStatusThunkCreator =
  (userId: number): CommonThunkType<ProfileActionsTypes, void> =>
  (dispatch) => {
    profileApi.getStatus(userId).then((data) => {
      dispatch(profileActions.getStatusActionCreator(data));
    });
  };

export const updateStatusThunkCreator =
  (status: string): CommonThunkType<ProfileActionsTypes, void> =>
  (dispatch) => {
    profileApi.updateStatus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(profileActions.updateStatusActionCreator(status));
      }
    });
  };

export const sendPhotoThunkCreator = (
  file: string | Blob
): CommonThunkType<ProfileActionsTypes, void> => {
  if (file === 'delete') {
    return (dispatch) => {
      dispatch(profileActions.sendPhotoActionCreator(null));
    };
  } else {
    return (dispatch) => {
      profileApi.sendPhoto(file).then((data) => {
        if (data.resultCode === 0) {
          dispatch(profileActions.sendPhotoActionCreator(data.data.photos));
        }
      });
    };
  }
};
