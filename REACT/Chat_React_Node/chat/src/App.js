//NOTE/: external library
import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

//NOTE/: internal library
import { Home, Auth } from "./pages";

class App extends Component {
    state = {
        isAuth: window.localStorage.token ? true : false,
    };

    render() {
        return (
            <div className='wrapper'>
                <Route
                    exact
                    path={["/", "/login", "/register", "/register/check"]}
                    component={Auth}
                />
                <Route exact path='/im' component={Home} />
            </div>
        );
    }
}

export default App;
//   <div className='wrapper'>
//       {this.state.isAuth ? <Redirect to='/im' /> : <Redirect to='/' />}

//       <Route
//           exact
//           path={["/", "/login", "/register"]}
//           component={Auth}
//       />
//       <Route exact path='/im' component={Home} />
//   </div>;
