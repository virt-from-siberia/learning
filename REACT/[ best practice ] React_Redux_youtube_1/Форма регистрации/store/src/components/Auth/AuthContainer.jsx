import React from "react";
import { connect } from "react-redux";
import { setEmail, setPassword } from "../../store/Auth/actions";
import { Auth } from "./Auth";

const AuthContainer = (props) => {
    const { email, password, setEmail, setPassword } = props;

    return (
        <Auth
            setEmail={setEmail}
            setPassword={setPassword}
            email={email}
            password={password}
        />
    );
};

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
    };
};
const mapDispatchToProps = {
    setEmail,
    setPassword,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
