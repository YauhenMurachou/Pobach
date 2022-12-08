import { CommonActionTypes, CommonThunkType } from './redux-store';
import { chatApi, MessageType, StatusType } from './../api/chat-api';
import { Dispatch } from 'redux';

const SET_MESSAGES = 'SET_MESSAGES';
const CLEAR_MESSAGES = 'CLEAR_MESSAGES';
const SET_STATUS = 'SET_STATUS';

export type chatInitialStateType = {
  messages: MessageType[];
  status: StatusType;
};

const initialState: chatInitialStateType = {
  messages: [] as MessageType[],
  status: 'pending',
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
};

type ChatActionsType = CommonActionTypes<typeof chatActions>;

export const chatReducer = (
  state = initialState,
  action: ChatActionsType
): chatInitialStateType => {
  switch (action.type) {
    case SET_MESSAGES: {
      return {
        ...state,
        messages: [...state.messages, ...action.data.messages],
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
  (): CommonThunkType<ChatActionsType> => {
    return async (dispatch) => {
      chatApi.start();
      chatApi.subscribe('message', newMessageHandler(dispatch));
      chatApi.subscribe('status', changeStatusHandler(dispatch));
    };
  };

export const stopMessagesThunkCreator =
  (): CommonThunkType<ChatActionsType> => {
    return async (dispatch) => {
      chatApi.unsubscribe('message');
      chatApi.unsubscribe('status');
      chatApi.stop();
      dispatch(chatActions.clearMessagesActionCreator());
    };
  };

export const sendMessageThunkCreator = (
  message: MessageType['message']
): CommonThunkType<ChatActionsType> => {
  return async (_dispatch) => {
    chatApi.send(message);
  };
};
