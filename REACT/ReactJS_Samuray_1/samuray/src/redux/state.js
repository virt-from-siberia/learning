const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MASSAGE = 'SEND_MASSAGE';

let store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          message: "ho how are you",
          likesCount: 12,
        },
        {
          id: 2,
          message: "it is my first post",
          likesCount: 11,
        },
        {
          id: 3,
          message: "very nice",
          likesCount: 11,
        },
      ],
      newPostText: "samuray",
    },
    messagesPage: {
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
      newMessageBody: ""
    },
  },

  _callSubscriber() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);

    } else if (action.type === UPDATE_NEW_POST_TEXT) {

      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);

    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {

      this._state.messagesPage.newMessageBody = action.body;
      this._callSubscriber(this._state);

    } else if (action.type === SEND_MASSAGE) {

      let body = this._state.messagesPage.newMessageBody;
      this._state.messagesPage.newMessageBody = '';
      this._state.messagesPage.messages.push({
        id: 7,
        message: body,
      });
      this._callSubscriber(this._state);
    }
  },
};



export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
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

// state.profilePage.posts.push(newPost);
// _callSubscriber(state);

export default store;
window.store = store;
