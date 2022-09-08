const ADD_MESSAGE = "ADD_MESSAGE"

export type addMessageActionType = {
  type: typeof ADD_MESSAGE
  newMessageText: string
}

export type initialStateType = typeof initialState

const initialState = {
  dialogsData: [
    { name: "Volha", id: 2 },
    { name: "Alena", id: 3 },
    { name: "Mikalay", id: 4 },
    { name: "Nina", id: 5 },
    { name: "Vasil", id: 6 },
    { name: "Valera", id: 7 }
  ],

  messageData: [
    { message: "You are woman", id: 2 },
    { message: "I am a man", id: 3 },
    { message: "This is more than just a game", id: 4 },
    { message: "New message", id: 5 },
    { message: "Hello!", id: 6 }
  ]
}

const dialogsPageReducer = (
  state = initialState,
  action: addMessageActionType
): initialStateType => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const newMessage = action.newMessageText
      return {
        ...state,
        messageData: [...state.messageData, { id: 7, message: newMessage }]
      }
    }

    default:
      return state
  }
}

export const addMessageActionCreator = (newMessageText: string): addMessageActionType => {
  return { type: ADD_MESSAGE, newMessageText }
}

export default dialogsPageReducer
