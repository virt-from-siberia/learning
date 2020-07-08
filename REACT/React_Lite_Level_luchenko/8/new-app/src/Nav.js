import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Navigation",
      subTitle: "Main Menu",
      show: "show",
      isShow: false
    };
  }

  showNav = () => {
    this.setState({
      isShow: !this.state.isShow
    });
  };

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
      <nav>
        <button type="button" onClick={this.showNav}>
          Show menu
        </button>
        {this.state.isShow ? <p>{this.state.show}</p> : null}
        <h1>{this.state.title}</h1>
        <h1>{this.state.subTitle}</h1>
        <h3>Navigation List</h3>
        <ul>{navList}</ul>
      </nav>
    );
  }
}

export default Nav;
