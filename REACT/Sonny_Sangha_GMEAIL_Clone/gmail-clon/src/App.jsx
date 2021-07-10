import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Mail } from './Mail';
import { EmailList } from './EmailList';
import { SendMail } from './SendMail';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <div className="app__body">
          <Sidebar />

          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>

        <SendMail />
      </div>
    </Router>
  );
}

export default App;
