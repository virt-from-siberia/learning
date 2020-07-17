import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css"
import {AppStateType} from "../../redux/redux-store";

type LoginFormOwnProps = {
    captchaUrl : string | null
}


const LoginForm : React.FC<InjectedFormProps<LoginFormValueType, LoginFormOwnProps> & LoginFormOwnProps>=
    ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormValueTypeKeys>("Email", "email", [required], Input)}
            {createField<LoginFormValueTypeKeys>("Password", "password", [required], Input, {type: "password"})}
            {createField<LoginFormValueTypeKeys>(undefined, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}

            { captchaUrl && <img src={captchaUrl} />}
            { captchaUrl &&  createField<LoginFormValueTypeKeys>("Symbols from image", "captcha", [required], Input, {}) }


            {error && <div className={style.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormValueType, LoginFormOwnProps >({form: 'login'})(LoginForm)


type MapStatePropsType = {
    captchaUrl : string | null,
    isAuth : boolean
}
type MapDispatchPropsType = {
    login : (email :string, password : string, rememberMe : boolean, captcha : string) => void
}

export type LoginFormValueType = {
    captcha: string,
    password: string,
    rememberMe: boolean,
    email: string
}
type LoginFormValueTypeKeys = Extract< keyof LoginFormValueType, string>

const Login : React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    const onSubmit = (formData : any) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}
const mapStateToProps = (state : AppStateType) : MapStatePropsType => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);