import React from "react";

const Debug = (props) => {
    return (
        <div className='debug'>
            <div>
                <b>Auth:</b>
                <ul>
                    <li>Email: {props.auth.email}</li>
                    <li>Password: {props.auth.password}</li>
                </ul>
            </div>
            <div>
                <b>Registration:</b>
                <ul>
                    <li>Email: {props.registration.email}</li>
                    <li>Password: {props.registration.password}</li>
                    <li>
                        Repeat Password: {props.registration.repeatPassword}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Debug;
