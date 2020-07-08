//NOTE: external library --->
import React from "react";
import { Route } from "react-router-dom";

//NOTE: internal library --->
import { LoginForm, RegisterForm } from "../../modules";
import CheckUser from "../Auth/components/CheckUser";
import "./Auth.scss";

const Auth = () => (
    <section className='auth'>
        <div className='auth__content'>
            <Route exact path={["/", "login"]} component={LoginForm} />
            <Route exact path='/register' component={RegisterForm} />
            <Route exact path='/register/check' component={CheckUser} />
        </div>
    </section>
);
export default Auth;
