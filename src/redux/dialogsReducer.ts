import { createAction, createSlice } from '@reduxjs/toolkit';
import { Message } from 'src/types';

export type Dialog = {
  id: number;
  userName: string;
  hasNewMessages: boolean;
  lastDialogActivityDate: string;
  lastUserActivityDate: string;
  newMessagesCount: number;
  photos: { small: string; large: string } | null;
};

export type MessagesList = {
  items: Message[];
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
export const sendMessageAction = createAction<{ id: number; body: string }>(
  'dialogs/sendMessageAction'
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
    messageAdd(state, action) {
      if (state.messagesList) {
        state.messagesList.items = [
          ...state.messagesList.items,
          action.payload,
        ];
      }
    },
  },
});

export const { allDialogsGet, messagesListGet, messageAdd } =
  dialogsSlice.actions;

export default dialogsSlice.reducer;
