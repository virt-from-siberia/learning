import React from "react";
import { connect } from "react-redux";
import {
    setEmail,
    setPassword,
    setRepeatPassword,
} from "../../store/Registration/actions";
import { Registration } from "./Registration";

const RegistrationContainer = (props) => {
    const {
        email,
        password,
        repeatPassword,
        setEmail,
        setPassword,
        setRepeatPassword,
    } = props;

    return (
        <Registration
            setEmail={setEmail}
            setPassword={setPassword}
            setRepeatPassword={setRepeatPassword}
            email={email}
            password={password}
            repeatPassword={repeatPassword}
        />
    );
};

const mapStateToProps = (state) => {
    return {
        email: state.registration.email,
        password: state.registration.password,
        repeatPassword: state.registration.repeatPassword,
    };
};
const mapDispatchToProps = {
    setEmail,
    setPassword,
    setRepeatPassword,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegistrationContainer);
