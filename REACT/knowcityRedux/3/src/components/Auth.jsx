import React from "react";

export default class Auth extends React.Component {
    onEmailChange = evt => {
        this.props.setEmailText(evt.target.value);
    };
    onPasswordChange = evt => {
        this.props.setPasswordText(evt.target.value);
    };

    render() {
        return (
            <div className='auth'>
                <h3>Sign In</h3>
                <form>
                    <div>
                        <input
                            type='text'
                            name='login'
                            autoComplete='off'
                            placeholder='E-mail'
                            spellCheck={false}
                            value={this.props.email}
                            onChange={this.onEmailChange}
                        />
                    </div>
                    <div>
                        <input
                            type='password'
                            name='password'
                            placeholder='password'
                            s
                            value={this.props.password}
                            onChange={this.onPasswordChange}
                        />
                    </div>
                    <div>
                        <button>Sign in</button>
                    </div>
                </form>
            </div>
        );
    }
}
