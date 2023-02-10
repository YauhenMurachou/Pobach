import { CommonActionTypes } from 'src/redux/redux-store';

const GET_TODOS = 'GET_TODOS';
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const INCREMENT_ASYNC = 'INCREMENT_ASYNC';
const TODOS_REQUESTED = 'TODOS_REQUESTED';

export type Todos = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type SettingsStateType = {
  todos: Todos | null;
  count: number;
};

const initialState: SettingsStateType = {
  todos: null,
  count: 0,
};

export const actions = {
  getTodosAction: (payload: Todos) =>
    ({
      type: GET_TODOS,
      payload,
    } as const),
  incrementAction: () =>
    ({
      type: INCREMENT,
    } as const),
  decrementAction: () =>
    ({
      type: DECREMENT,
    } as const),
  incrementAsyncAction: () =>
    ({
      type: INCREMENT_ASYNC,
    } as const),
  todosRequestedAction: () =>
    ({
      type: TODOS_REQUESTED,
    } as const),
};

type SettingsActionsType = CommonActionTypes<typeof actions>;

export default function settingsReducer(
  state = initialState,
  action: SettingsActionsType
) {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}
