let rerenderEntireTree = () => {};

let state = {
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
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0,
  };

  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;
