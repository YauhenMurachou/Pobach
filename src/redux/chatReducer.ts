import { CommonActionTypes, CommonThunkType } from './redux-store';
import { chatApi, MessageType } from './../api/chat-api';
import { Dispatch } from 'redux';

const SET_MESSAGES = 'SET_MESSAGES';
const CLEAR_MESSAGES = 'CLEAR_MESSAGES';

export type chatInitialStateType = {
  messages: MessageType[];
};

const initialState: chatInitialStateType = {
  messages: [] as MessageType[],
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

export const startMessagesThunkCreator =
  (): CommonThunkType<ChatActionsType> => {
    return async (dispatch) => {
      chatApi.start();
      chatApi.subscribe(newMessageHandler(dispatch));
    };
  };

export const stopMessagesThunkCreator =
  (): CommonThunkType<ChatActionsType> => {
    return async (dispatch) => {
      chatApi.unsubscribe();
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
