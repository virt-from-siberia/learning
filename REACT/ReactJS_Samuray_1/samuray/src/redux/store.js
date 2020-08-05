// import profileReducer from "../redux/profileReducer";
// import sidebarReducer from "../redux/sidebarReducer";
// import messageReducer from "../redux/messageReducer";

// let store = {
//   _state: {
//     profilePage: {
//       posts: [
//         {
//           id: 1,
//           message: "ho how are you",
//           likesCount: 12,
//         },
//         {
//           id: 2,
//           message: "it is my first post",
//           likesCount: 11,
//         },
//         {
//           id: 3,
//           message: "very nice",
//           likesCount: 11,
//         },
//       ],
//       newPostText: "samuray",
//     },
//     messagesPage: {
//       dialogs: [
//         {
//           id: 1,
//           name: "Aleksery",
//         },
//         {
//           id: 2,
//           name: "Michael",
//         },
//         {
//           id: 3,
//           name: "Maxim",
//         },
//         {
//           id: 4,
//           name: "Max",
//         },
//         {
//           id: 5,
//           name: "Lena",
//         },
//       ],
//       messages: [
//         {
//           id: 1,
//           message: "Hi",
//         },
//         {
//           id: 2,
//           message: "Hello",
//         },
//         {
//           id: 3,
//           message: "What ?",
//         },
//         {
//           id: 4,
//           message: "How are you",
//         },
//         {
//           id: 5,
//           message: "Nice",
//         },
//       ],
//       newMessageBody: "",
//     },
//     sidebar: {},
//   },

//   _callSubscriber() {
//     console.log("state changed");
//   },

//   getState() {
//     return this._state;
//   },

//   subscribe(observer) {
//     this._callSubscriber = observer;
//   },

//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.messagesPage = messageReducer(this._state.messagesPage, action);
//     this._state.sidebar = sidebarReducer(this._state.sidebar, action);

//     this._callSubscriber(this._state);
//   },
// };

// export default store;
// window.store = store;
