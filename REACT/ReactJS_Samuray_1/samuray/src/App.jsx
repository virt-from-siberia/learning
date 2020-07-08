import React from "react";
import { Route } from "react-router-dom";
import Header from "./componets/Header/Header";
import Navbar from "./componets/Navbar/Navbar";
import Profile from "./componets/Profile/Profile";
import Dialogs from "./componets/Dialogs/Dialogs";

import "./App.css";

const App = (props) => {
  console.log(props);

  const { state } = props;
  const { addPost, updateNewPostText } = props;
  const { profilePage, messagesPage } = state;

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route
          path='/dialogs'
          render={() => <Dialogs state={messagesPage} />}
        />
        <Route
          path='/profile'
          render={() => (
            <Profile
              profilePage={profilePage}
              addPost={addPost}
              updateNewPostText={updateNewPostText}
            />
          )}
        />
      </div>
    </div>
  );
};

export default App;
