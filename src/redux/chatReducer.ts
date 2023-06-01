import { Dispatch } from 'redux';
import { v4 as uuidv4 } from 'uuid';

import { chatApi } from 'src/api/chatApi';
import i18n from 'src/i18n';
import { CommonActionTypes, CommonThunkType } from 'src/redux/redux-store';
import { ChatMessage, ChatStatus } from 'src/types';
import { checkPageStatus } from 'src/utils/checkNotification';

const SET_MESSAGES = 'SET_MESSAGES';
const CLEAR_MESSAGES = 'CLEAR_MESSAGES';
const SET_STATUS = 'SET_STATUS';
const DELETE_MESSAGE = 'DELETE_MESSAGE';
const RESTORE_MESSAGE = 'RESTORE_MESSAGE';

type ChatInitialStateType = {
  messages: ChatMessage[];
  status: ChatStatus;
  isMuted: boolean;
};

const initialState: ChatInitialStateType = {
  messages: [] as ChatMessage[],
  status: 'pending',
  isMuted: false,
};

export const chatActions = {
  setMessagesActionCreator: (messages: ChatMessage[]) =>
    ({
      type: SET_MESSAGES,
      data: { messages },
    } as const),
  clearMessagesActionCreator: () =>
    ({
      type: CLEAR_MESSAGES,
      data: [],
    } as const),
  setStatusActionCreator: (status: ChatStatus) =>
    ({
      type: SET_STATUS,
      data: { status },
    } as const),
  deleteMessageActionCreator: (id: string) =>
    ({
      type: DELETE_MESSAGE,
      data: { id },
    } as const),
  restoreMessageActionCreator: (id: string) =>
    ({
      type: RESTORE_MESSAGE,
      data: { id },
    } as const),
};

export type ChatActionsType = CommonActionTypes<typeof chatActions>;

export const chatReducer = (
  state = initialState,
  action: ChatActionsType
): ChatInitialStateType => {
  switch (action.type) {
    case SET_MESSAGES: {
      const newMessages = action.data.messages;
      const currentUrl = window.location.href;
      const isMuted = JSON.parse(localStorage.getItem('isMuted') || '[]');
      const isOffNotifications = JSON.parse(
        localStorage.getItem('isOffNotifications') || '[]'
      );

      if (
        newMessages.length === 1 &&
        !currentUrl.includes('Chat') &&
        !isOffNotifications
      ) {
        checkPageStatus(
          newMessages[0].message,
          newMessages[0].userName,
          currentUrl,
          isMuted
        );
      }
      return {
        ...state,
        messages: [
          ...state.messages,
          ...action.data.messages.map((message) => ({
            ...message,
            id: uuidv4(),
          })),
        ].filter((_message, index, array) => index >= array.length - 100),
        // id to every message for prevent rerender after new message sending
      };
    }

    case CLEAR_MESSAGES: {
      return {
        ...state,
        messages: [],
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.data.status,
      };
    }
    case DELETE_MESSAGE: {
      return {
        ...state,
        messages: [...state.messages].map((message) => {
          if (message.id === action.data.id) {
            message.deleted = true;
            message.deletedMessage = i18n.t('chat.deletedMessage') as string;
          }
          return message;
        }),
      };
    }
    case RESTORE_MESSAGE: {
      return {
        ...state,
        messages: [...state.messages].map((message) => {
          if (message.id === action.data.id) {
            message.deleted = false;
            message.deletedMessage = undefined;
          }
          return message;
        }),
      };
    }

    default:
      return state;
  }
};

let _newMessageHandler: ((messages: ChatMessage[]) => void) | null = null;

const newMessageHandler = (dispatch: Dispatch) => {
  if (_newMessageHandler === null) {
    _newMessageHandler = (messages: ChatMessage[]) => {
      dispatch(chatActions.setMessagesActionCreator(messages));
    };
  }
  return _newMessageHandler;
};

let _statusHandler: ((status: ChatStatus) => void) | null = null;

const changeStatusHandler = (dispatch: Dispatch) => {
  if (_statusHandler === null) {
    _statusHandler = (status: ChatStatus) => {
      dispatch(chatActions.setStatusActionCreator(status));
    };
  }
  return _statusHandler;
};

export const startMessagesThunkCreator =
  (): CommonThunkType<ChatActionsType> => async (dispatch) => {
    chatApi.start();
    chatApi.subscribe('message', newMessageHandler(dispatch));
    chatApi.subscribe('status', changeStatusHandler(dispatch));
  };

export const stopMessagesThunkCreator =
  (): CommonThunkType<ChatActionsType> => async (dispatch) => {
    chatApi.unsubscribe('message');
    chatApi.unsubscribe('status');
    chatApi.stop();
    dispatch(chatActions.clearMessagesActionCreator());
  };

export const sendMessageThunkCreator =
  (message: ChatMessage['message']): CommonThunkType<ChatActionsType> =>
  async (_dispatch) => {
    chatApi.send(message);
  };
