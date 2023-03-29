import { createAction, createSlice } from '@reduxjs/toolkit';
import { UserType } from 'src/types';

type InitialStateFriendsType = {
  friends: UserType[];
};

const initialState: InitialStateFriendsType = {
  friends: [],
};

export const getFriendsAction = createAction('friends/getFriendsAction');

const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    friendsGet(state, action) {
      state.friends = action.payload;
    },
  },
});

export const { friendsGet } = friendsSlice.actions;

export default friendsSlice.reducer;
