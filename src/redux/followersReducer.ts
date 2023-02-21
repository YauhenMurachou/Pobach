import { createAction, createSlice } from '@reduxjs/toolkit';
import { UserType } from 'src/types';

type InitialStateFollowersType = {
  followers: UserType[];
};

const initialState: InitialStateFollowersType = {
  followers: [],
};

export const getFollowersAction = createAction('followers/getFollowersAction');

const followersSlice = createSlice({
  name: 'followers',
  initialState,
  reducers: {
    followersGet(state, action) {
      state.followers = action.payload;
    },
  },
});

export const { followersGet } = followersSlice.actions;

export default followersSlice.reducer;
