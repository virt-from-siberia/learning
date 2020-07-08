import React from "react";
import { Route } from "react-router-dom";
import Header from "./componets/Header/Header";
import Navbar from "./componets/Navbar/Navbar";
import Profile from "./componets/Profile/Profile";
import Dialogs from "./componets/Dialogs/Dialogs";

import "./App.css";

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route
          path='/dialogs'
          render={() => <Dialogs state={props.state.messagesPage} />}
        />
        <Route
          path='/profile'
          render={() => (
            <Profile
              profilePage={props.state.profilePage}
              dispatch={props.dispatch}
            />
          )}
        />
      </div>
    </div>
  );
};

export default App;
