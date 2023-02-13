import { createAction, createSlice } from '@reduxjs/toolkit';

export type Dialog = {
  id: number;
  userName: string;
  hasNewMessages: boolean;
  lastDialogActivityDate: string;
  lastUserActivityDate: string;
  newMessagesCount: number;
  photos: { small: string; large: string } | null;
};

type InitialStateDialogsType = {
  dialogs: Dialog[];
};

const initialState: InitialStateDialogsType = {
  dialogs: [],
};

export const getDialogsAction = createAction('dialogs/getDialogsAction');

const dialogsSlice = createSlice({
  name: 'dialogs',
  initialState,
  reducers: {
    allDialogsGet(state, action) {
      state.dialogs = action.payload;
    },
  },
});

export const { allDialogsGet } = dialogsSlice.actions;

export default dialogsSlice.reducer;
