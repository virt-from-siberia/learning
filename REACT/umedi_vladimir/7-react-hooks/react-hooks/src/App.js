import React from "react";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Profile } from "./pages/Profile";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Alert } from "./components/Alert";
import { AlertState } from "./context/alert/alertState";

function App() {
  return (
    <AlertState>
      <BrowserRouter>
        <Navbar />
        <div className="container pt-4">
          <Alert alert={{ text: "Test alert" }} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/Profile/:name:name" component={Profile} />
          </Switch>
        </div>
      </BrowserRouter>
    </AlertState>
  );
}

export default App;
