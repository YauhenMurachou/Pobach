import { createAction, createSlice } from '@reduxjs/toolkit';

import {
  Dialog,
  ID,
  MessageType,
  MessagesListType,
  NewMessage,
} from 'src/types';

type TitleDialog = (string | number)[];

type InitialStateDialogsType = {
  dialogs: Dialog[];
  messagesList: MessagesListType | null;
  messagesTitles: TitleDialog[];
  openDialogId?: number;
};

const initialState: InitialStateDialogsType = {
  dialogs: [],
  messagesList: null,
  messagesTitles: [],
};

export const getDialogsAction = createAction('dialogs/getDialogsAction');
export const startDialogAction = createAction<ID>('dialogs/startDialogAction');
export const getMessagesListAction = createAction<{
  id: number;
  page?: number;
}>('dialogs/getMessagesListAction');
export const getTitlesAction = createAction<ID>(
  'dialogs/getMessagesTitleAction'
);
export const updateTitleAction = createAction<NewMessage>(
  'dialogs/titleUpdated'
);
export const sendMessageAction = createAction<NewMessage>(
  'dialogs/sendMessageAction'
);
export const dialogOpenedAction = createAction<ID>('dialogs/dialogOpened');

type Action<T> = {
  payload: T;
  type: string;
};

const dialogsSlice = createSlice({
  name: 'dialogs',
  initialState,
  reducers: {
    allDialogsGet(state, action: Action<Dialog[]>) {
      state.dialogs = action.payload;
    },
    messagesListGet(state, action: Action<MessagesListType>) {
      state.messagesList
        ? (state.messagesList = {
            ...state.messagesList,
            items: [...action.payload.items, ...state.messagesList.items],
          })
        : (state.messagesList = action.payload);
    },
    messagesTitlesGet(state, action: Action<TitleDialog>) {
      state.messagesTitles = [...state.messagesTitles, action.payload];
    },
    messagesListCleared(state) {
      state.messagesList = null;
    },
    dialogOpened(state, action: Action<ID>) {
      state.openDialogId = action.payload.id;
    },
    titleUpdated(state, action: Action<NewMessage>) {
      const updatedIndex = state.messagesTitles.findIndex((message) =>
        message.find((item) => item === action.payload.id)
      );
      state.messagesTitles[updatedIndex] = Object.values(action.payload);
    },
    messageAdd(state, action: Action<MessageType>) {
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
  messagesTitlesGet,
  messageAdd,
  messagesListCleared,
  dialogOpened,
  titleUpdated,
} = dialogsSlice.actions;

export default dialogsSlice.reducer;
