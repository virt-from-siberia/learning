import React from "react";

export const Registration = ({
    email,
    password,
    repeatPassword,
    setEmail,
    setPassword,
    setRepeatPassword,
}) => {
    const onEmailChange = (evt) => {
        setEmail(evt.target.value);
    };

    const onPasswordChange = (evt) => {
        setPassword(evt.target.value);
    };
    const onRepeatPasswordChange = (evt) => {
        setRepeatPassword(evt.target.value);
    };

    return (
        <div className='registration'>
            <h3>Sign Up</h3>
            <form>
                <div>
                    <input
                        type='text'
                        name='login'
                        autoComplete='off'
                        placeholder='E-mail'
                        spellCheck={false}
                        onChange={(evt) => onEmailChange(evt)}
                        value={email}
                    />
                </div>

                <div>
                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        onChange={(evt) => onPasswordChange(evt)}
                        value={password}
                    />
                    <input
                        type='password'
                        name='repeat-password'
                        placeholder='Repeat Password'
                        onChange={(evt) => onRepeatPasswordChange(evt)}
                        value={repeatPassword}
                    />
                </div>

                <div>
                    <button className='register-btn'>Sign Up</button>
                </div>
            </form>
        </div>
    );
};
