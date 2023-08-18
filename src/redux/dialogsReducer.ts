import { createAction, createSlice } from '@reduxjs/toolkit';

import {
  Dialog,
  ID,
  MessageType,
  MessagesListType,
  NewMessage,
} from 'src/types';

type TitleDialog = (string | number)[];
type SenderDialog = number[];
type ViewedDialog = (number | boolean)[];

type InitialStateDialogsType = {
  dialogs: Dialog[];
  messagesList: MessagesListType | null;
  messagesTitles: {
    titles: TitleDialog[];
    senders: SenderDialog[];
    viewed: ViewedDialog[];
  };
  openDialogId?: number;
  newMessagesCount?: number;
};

const initialState: InitialStateDialogsType = {
  dialogs: [],
  messagesList: null,
  messagesTitles: { titles: [], senders: [], viewed: [] },
};

export const deleteMessageAction = createAction<string>(
  'dialogs/deleteMessage'
);

export const dialogOpenedAction = createAction<ID>('dialogs/dialogOpened');

export const getDialogsAction = createAction('dialogs/getDialogsAction');

export const getNewMessagesCountAction = createAction(
  'dialogs/getNewMessagesCount'
);

export const getMessagesListAction = createAction<ID>(
  'dialogs/getMessagesListAction'
);

export const getTitlesAction = createAction<ID>(
  'dialogs/getMessagesTitleAction'
);

export const restoreMessageAction = createAction<string>(
  'dialogs/restoreMessage'
);

export const sendMessageAction = createAction<NewMessage>(
  'dialogs/sendMessageAction'
);

export const startDialogAction = createAction<ID>('dialogs/startDialogAction');

export const updateTitleAction = createAction<NewMessage>(
  'dialogs/titleUpdated'
);

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
      state.messagesTitles.titles = [
        ...state.messagesTitles.titles,
        action.payload,
      ];
    },
    messagesSendersGet(state, action: Action<SenderDialog>) {
      state.messagesTitles.senders = [
        ...state.messagesTitles.senders,
        action.payload,
      ];
    },
    messagesViewedGet(state, action: Action<ViewedDialog>) {
      state.messagesTitles.viewed = [
        ...state.messagesTitles.viewed,
        action.payload,
      ];
    },
    messagesListCleared(state) {
      state.messagesList = null;
    },
    dialogOpened(state, action: Action<ID>) {
      state.openDialogId = action.payload.id;
    },
    titleUpdated(state, action: Action<NewMessage>) {
      const updatedIndex = state.messagesTitles.titles.findIndex((message) =>
        message.find((item) => item === action.payload.id)
      );
      state.messagesTitles.titles[updatedIndex] = Object.values(action.payload);
    },
    messageAdd(state, action: Action<MessageType>) {
      if (state.messagesList) {
        state.messagesList.items = [
          ...state.messagesList.items,
          action.payload,
        ];
      }
    },
    messageDeleted(state, action: Action<string>) {
      if (state.messagesList) {
        state.messagesList.items.forEach((message) =>
          message.id === action.payload ? (message.deleted = true) : message
        );
      }
    },
    messageRestored(state, action: Action<string>) {
      if (state.messagesList) {
        state.messagesList.items.forEach((message) =>
          message.id === action.payload ? (message.deleted = false) : message
        );
      }
    },
    newMessagesGet(state, action: Action<number>) {
      state.newMessagesCount = action.payload;
    },
  },
});

export const {
  allDialogsGet,
  messagesListGet,
  messagesTitlesGet,
  messagesSendersGet,
  messagesViewedGet,
  messageAdd,
  messagesListCleared,
  messageDeleted,
  messageRestored,
  newMessagesGet,
} = dialogsSlice.actions;

export default dialogsSlice.reducer;
