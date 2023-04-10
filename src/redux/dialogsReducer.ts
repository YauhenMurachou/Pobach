import { createAction, createSlice } from '@reduxjs/toolkit';
import { Dialog, Message } from 'src/types';

export type MessagesList = {
  items: Message[];
  totalCount: number;
  error: null | string;
};

type InitialStateDialogsType = {
  dialogs: Dialog[];
  messagesList: MessagesList | null;
  openDialogId?: number;
};

const initialState: InitialStateDialogsType = {
  dialogs: [],
  messagesList: null,
};

export const getDialogsAction = createAction('dialogs/getDialogsAction');
export const startDialogAction = createAction<{ id: number }>(
  'dialogs/startDialogAction'
);
export const getMessagesListAction = createAction<{ id: number }>(
  'dialogs/getMessagesListAction'
);
export const sendMessageAction = createAction<{ id: number; body: string }>(
  'dialogs/sendMessageAction'
);
export const dialogOpenedAction = createAction<{ id: number }>(
  'dialogs/dialogOpened'
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
    messagesListCleared(state) {
      state.messagesList = null;
    },
    dialogOpened(state, action) {
      state.openDialogId = action.payload.id;
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

export const {
  allDialogsGet,
  messagesListGet,
  messageAdd,
  messagesListCleared,
  dialogOpened,
} = dialogsSlice.actions;

export default dialogsSlice.reducer;
