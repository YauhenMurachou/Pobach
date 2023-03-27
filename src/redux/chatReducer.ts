import { Dispatch } from 'redux';
import { chatApi, MessageType, StatusType } from 'src/api/chat-api';
import { CommonActionTypes, CommonThunkType } from 'src/redux/redux-store';
import { checkPageStatus } from 'src/utils/checkNotification';
import { v4 as uuidv4 } from 'uuid';

const SET_MESSAGES = 'SET_MESSAGES';
const CLEAR_MESSAGES = 'CLEAR_MESSAGES';
const SET_STATUS = 'SET_STATUS';
const SET_MUTED = 'SET_MUTED';
const DELETE_MESSAGE = 'DELETE_MESSAGE';
const RESTORE_MESSAGE = 'RESTORE_MESSAGE';

type ChatInitialStateType = {
  messages: MessageType[];
  status: StatusType;
  isMuted: boolean;
};

const initialState: ChatInitialStateType = {
  messages: [] as MessageType[],
  status: 'pending',
  isMuted: false,
};

export const chatActions = {
  setMessagesActionCreator: (messages: MessageType[]) =>
    ({
      type: SET_MESSAGES,
      data: { messages },
    } as const),
  clearMessagesActionCreator: () =>
    ({
      type: CLEAR_MESSAGES,
      data: [],
    } as const),
  setStatusActionCreator: (status: StatusType) =>
    ({
      type: SET_STATUS,
      data: { status },
    } as const),
  setMutedActionCreator: (isMuted: boolean) =>
    ({
      type: SET_MUTED,
      data: { isMuted },
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

type ChatActionsType = CommonActionTypes<typeof chatActions>;

export const chatReducer = (
  state = initialState,
  action: ChatActionsType
): ChatInitialStateType => {
  switch (action.type) {
    case SET_MESSAGES: {
      const newMessages = action.data.messages;
      const currentUrl = window.location.href;

      if (newMessages.length === 1 && !currentUrl.includes('Chat')) {
        checkPageStatus(
          newMessages[0].message,
          newMessages[0].userName,
          currentUrl,
          state.isMuted
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
    case SET_MUTED: {
      return {
        ...state,
        isMuted: action.data.isMuted,
      };
    }
    case DELETE_MESSAGE: {
      return {
        ...state,
        messages: [...state.messages].map((message) => {
          if (message.id === action.data.id) {
            message.deleted = true;
            message.deletedMessage = 'Message deleted. Restore';
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

let _newMessageHandler: ((messages: MessageType[]) => void) | null = null;

const newMessageHandler = (dispatch: Dispatch) => {
  if (_newMessageHandler === null) {
    _newMessageHandler = (messages: MessageType[]) => {
      dispatch(chatActions.setMessagesActionCreator(messages));
    };
  }
  return _newMessageHandler;
};

let _statusHandler: ((status: StatusType) => void) | null = null;

const changeStatusHandler = (dispatch: Dispatch) => {
  if (_statusHandler === null) {
    _statusHandler = (status: StatusType) => {
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
  (message: MessageType['message']): CommonThunkType<ChatActionsType> =>
  async (_dispatch) => {
    chatApi.send(message);
  };
