const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MASSAGE = "SEND_MASSAGE";

let initialState = {
  dialogs: [
    {
      id: 1,
      name: "Aleksery",
    },
    {
      id: 2,
      name: "Michael",
    },
    {
      id: 3,
      name: "Maxim",
    },
    {
      id: 4,
      name: "Max",
    },
    {
      id: 5,
      name: "Lena",
    },
  ],
  messages: [
    {
      id: 1,
      message: "Hi",
    },
    {
      id: 2,
      message: "Hello",
    },
    {
      id: 3,
      message: "What ?",
    },
    {
      id: 4,
      message: "How are you",
    },
    {
      id: 5,
      message: "Nice",
    },
  ],
  newMessageBody: "",
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return { ...state, newMessageBody: action.body };

    case SEND_MASSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messages: [
          ...state.messages,
          {
            id: 7,
            message: body,
          },
        ],
      };

    default:
      return state;
  }
};

export const sendMessageCreator = (text) => {
  return {
    type: SEND_MASSAGE,
    newText: text,
  };
};
export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
};

export default messageReducer;
