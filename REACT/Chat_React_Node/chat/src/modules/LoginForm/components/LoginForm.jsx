//NOTE: external library --->
import React, { Component, Fragment } from "react";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import axios from "../../../core/axios";

//NOTE: internal library --->
import { Button } from "../../../components";
import { Block } from "../../../components";
import { openNotification } from "../../../utils/helpers";
import { userActions } from "../../../redux/actions";
import "./LoginForm.scss";

class LoginForm extends Component {
    state = {
        isSubmitted: false,
    };

    render() {
        const { fetchUserData } = this.props;

        const onFinish = (values) => {
            this.setState({
                isSubmitted: true,
            });

            console.log("Received values of form: ", values);

            return axios.post("/user/login", values).then(({ data }) => {
                this.setState({
                    isSubmitted: false,
                });
                console.log(data);

                //NOTE/: If success take token into localstorage
                if (data.status === "success") {
                    openNotification({
                        text: "Вход выполнен успешно",
                        type: "success",
                        title: "Авторизация успешно",
                    });
                    localStorage.token = data.token;
                    fetchUserData(data.token);

                    console.log(this.props);

                    setTimeout(() => {
                        this.props.history.push("/im");
                    }, 200);
                }
                if (data.status === "error_404") {
                    openNotification({
                        text: "Проверте логин или пароль",
                        type: "error",
                        title: "Ошибка при авторизации",
                    });
                }
                if (data.status === "error_422") {
                    openNotification({
                        text: "Проверте логин или пароль",
                        type: "error",
                        title: "Ошибка при авторизации",
                    });
                }
                if (data.status === "error_408") {
                    openNotification({
                        text: "Неверный пароль",
                        type: "error",
                        title: "Введите правельный пароль",
                    });
                }
            });
        };

        //NOTE/: text messages
        const enter = "Войти в аккаунт";
        const loading = "Отправка";

        return (
            <Fragment>
                <div className='auth__top'>
                    <h2>Войти в аккаунт</h2>
                    <p>Пожалуста войдите в свой аккаунт</p>
                </div>

                <Block>
                    <Form
                        name='normal_login'
                        className='login-form'
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name='email'
                            rules={[
                                {
                                    required: true,
                                    message: "Введите корректный Email!",
                                },
                            ]}
                            // NOTE/: VALIDATION ICON
                            // TODO: VALIDATION ICON
                        >
                            <Input
                                prefix={
                                    <UserOutlined className='site-form-item-icon' />
                                }
                                placeholder='Email'
                            />
                        </Form.Item>
                        <Form.Item
                            name='password'
                            rules={[
                                {
                                    required: true,
                                    message: "Введите пароль!",
                                },
                            ]}
                        >
                            <Input
                                prefix={
                                    <LockOutlined className='site-form-item-icon' />
                                }
                                type='password'
                                placeholder='Password'
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type='primary'
                                htmlType='submit'
                                className='login-form-button '
                                disabled={this.state.isSubmitted}
                            >
                                {this.state.isSubmitted ? loading : enter}
                            </Button>

                            <Link className='reg' to={"/register"}>
                                Зарегестрироватся
                            </Link>
                        </Form.Item>
                    </Form>
                </Block>
            </Fragment>
        );
    }
}

export default connect(({ user }) => user, userActions)(LoginForm);
