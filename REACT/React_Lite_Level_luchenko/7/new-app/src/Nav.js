import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

class Nav extends React.Component {
  render() {
    const nav = this.props.nav;

    const navList = Object.keys(nav).map((navElement, index) => {
      return (
        <Router key={index}>
          <li>
            <Link to={nav[navElement]}>{navElement}</Link>
          </li>
        </Router>
      );
    });
    return (
      <div>
        <h3>Navigation List</h3>
        <ul>{navList}</ul>
      </div>
    );
  }
}

export default Nav;
