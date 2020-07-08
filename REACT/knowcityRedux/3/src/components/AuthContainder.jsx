import React from "react";
import Auth from "./Auth";
import { connect } from "react-redux";
import { setEmailText, setPasswordText } from "../store/auth/actions";

class AuthContainer extends React.Component {
    render() {
        const { email, password, setEmailText, setPasswordText } = this.props;
        return (
            <Auth
                email={email}
                password={password}
                setEmailText={setEmailText}
                setPasswordText={setPasswordText}
            />
        );
    }
}
//NOTE/: Функция будет брать из state значения и передавать в props компанента
const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password
    };
};
//NOTE/: Функция будет привязывать action creators к функции dispatch и ложить их в props компанента
const mapDispatchToProps = {
    setEmailText: setEmailText,
    setPasswordText: setPasswordText
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
