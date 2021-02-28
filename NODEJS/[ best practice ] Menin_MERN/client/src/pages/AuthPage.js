import React, { useState, useEffect, useContext } from "react";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import { AuthContext } from "../context/AuthContext";
import "./AuthPage.css";

function AuthPage() {
    const auth = useContext(AuthContext);
    const message = useMessage();
    const { loading, error, request, clearError } = useHttp();
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    useEffect(() => {
        message(error);
        clearError();
    }, [error, message, clearError]);

    const changeHandler = (evt) => {
        setForm({ ...form, [evt.target.name]: evt.target.value });
    };

    useEffect(() => {
        window.M.updateTextFields();
    }, []);

    const registerHandler = async () => {
        try {
            const data = await request("/api/auth/register", "POST", {
                ...form,
            });
            message(data.message);
        } catch (err) {}
    };

    const loginHandler = async () => {
        try {
            const data = await request("/api/auth/login", "POST", {
                ...form,
            });
            auth.login(data.token, data.userId);
        } catch (err) {}
    };

    return (
        <div className='row'>
            <div className='col s6 offset-s3'>
                <h1>Сократи ссылку</h1>
                <div className='card blue darken-1'>
                    <div className='card-content white-text'>
                        <span className='card-title'>Авторизация</span>

                        <div className=''>
                            <div className='input-field '>
                                <input
                                    id='email'
                                    type='text'
                                    className='yellow-input'
                                    placeholder='Введите E-mail'
                                    name='email'
                                    onChange={changeHandler}
                                    value={form.email}
                                />
                                <label htmlFor='email'>E mail</label>
                            </div>
                            <div className='input-field '>
                                <input
                                    id='password'
                                    type='password'
                                    className='yellow-input'
                                    placeholder='Введите пароль'
                                    name='password'
                                    onChange={changeHandler}
                                    value={form.password}
                                />
                                <label htmlFor='password'>password</label>
                            </div>
                        </div>
                    </div>
                    <div className='card-action'>
                        <button
                            className='btn yellow darken-4 '
                            style={{ margin: "10px" }}
                            onClick={registerHandler}
                            disabled={loading}
                        >
                            Регистрация
                        </button>
                        <button
                            style={{ margin: "10px" }}
                            className='btn green ligthen-1 '
                            disabled={loading}
                            onClick={loginHandler}
                        >
                            Войти
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthPage;
