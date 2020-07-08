import React from "react";
import styles from "./app.module.css";
import router from "~s/router";
import { observer } from "mobx-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "~/routes";

export default
@observer
class App extends React.Component {
  render() {
    let routesComponents = routes.map(route => {
      return (
        <Route
          path={route.url}
          component={route.component}
          exact={route.exact}
          key={route.url}
        />
      );
    });
    return (
      <Router>
        <div className="container">
          <Switch>{routesComponents}</Switch>
        </div>
      </Router>
    );
  }
}
