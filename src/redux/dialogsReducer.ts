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

type Messsage = {
  id: number;
  body: string;
  translatedBody: string | null;
  addedAt: string;
  senderId: number;
  senderName: string;
  recipientId: number;
  viewed: boolean;
};

export type MessagesList = {
  items: Messsage[];
  totalCount: number;
  error: null | string;
};

type InitialStateDialogsType = {
  dialogs: Dialog[];
  messagesList: MessagesList | null;
};

const initialState: InitialStateDialogsType = {
  dialogs: [],
  messagesList: null,
};

export const getDialogsAction = createAction('dialogs/getDialogsAction');
export const getMessagesListAction = createAction<{ id: number }>(
  'dialogs/getMessagesListAction'
);

const dialogsSlice = createSlice({
  name: 'dialogs',
  initialState,
  reducers: {
    allDialogsGet(state, action) {
      state.dialogs = action.payload;
    },
    messagesListGet(state, action) {
      state.messagesList = action.payload;
    },
  },
});

export const { allDialogsGet, messagesListGet } = dialogsSlice.actions;

export default dialogsSlice.reducer;
