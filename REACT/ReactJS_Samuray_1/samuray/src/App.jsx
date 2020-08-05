import React from "react";
import { Route } from "react-router-dom";
import HeaderContainer from "./componets/Header/HeaderContainer";
import Navbar from "./componets/Navbar/Navbar";
import ProfileContainer from "./componets/Profile/ProfileContainer";
import UsersContainer from "./componets/Users/UsersContainer";
import Login from "./componets/Login/Login";
import DialogsContainer from "./componets/Dialogs/DialogsContainer";

import "./App.css";

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={() => <DialogsContainer />} />
        <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
        <Route path='/users' render={() => <UsersContainer />} />
        <Route path='/login' render={() => <Login />} />
      </div>
    </div>
  );
};

export default App;
