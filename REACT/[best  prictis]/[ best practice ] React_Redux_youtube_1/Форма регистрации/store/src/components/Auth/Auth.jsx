import React from "react";

export const Auth = (props) => {
    const onEmailChange = (evt) => {
        console.log(evt.target.value);
        props.setEmail(evt.target.value);
    };

    const onPasswordChange = (evt) => {
        props.setPassword(evt.target.value);
    };

    return (
        <div className='auth'>
            <h3>Sign In</h3>
            <form action=''>
                <div>
                    <input
                        type='text'
                        name='login'
                        autoComplete='off'
                        placeholder='email'
                        spellCheck='false'
                        value={props.email}
                        onChange={(evt) => onEmailChange(evt)}
                    />
                </div>
                <div>
                    <input
                        type='password'
                        name='password'
                        placeholder='password'
                        value={props.password}
                        onChange={(evt) => onPasswordChange(evt)}
                    />
                </div>
                <button className='auth-btn'>Sign In</button>
            </form>
        </div>
    );
};
