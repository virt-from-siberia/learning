//NOTE/: external library --->
import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Tooltip, Button } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { connect } from "react-redux";

//NOTE/: internal library --->
import { Block } from "../../../components";
import { userActions } from "../../../redux/actions";
import { openNotification } from "../../../utils/helpers";

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const RegisterForm = ({ fetchUserRegistration }) => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        fetchUserRegistration(values).then((data) => {
            if (data.data.status === "success") {
                openNotification({
                    text: "регистрация выполнена успешно",
                    type: "success",
                    title: "Регистрация успешно",
                });
            }

            if (data.data.status === "error_email_already_exist") {
                openNotification({
                    text: "Email занят",
                    type: "error",
                    title: "Пользователь с таким Email уже существует",
                });
            }
            console.log(data);
        });
    };

    return (
        <Fragment>
            <div className='auth__top'>
                <h2>Регистрация аккаунта</h2>
                <p>Зарегестрируйте свой аккаунт</p>
            </div>
            <Block>
                <Form
                    {...formItemLayout}
                    form={form}
                    name='register'
                    onFinish={onFinish}
                    scrollToFirstError
                >
                    <Form.Item
                        name='email'
                        label='E-mail'
                        rules={[
                            {
                                type: "email",
                                message: "Введите правельный email",
                            },
                            {
                                required: true,
                                message: "Введите email",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name='password'
                        label='Password'
                        rules={[
                            {
                                required: true,
                                message: "Введите пароль!",
                            },
                            //TODO: validation password rules --->
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                    if (value.length > 5) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(
                                        "Не менее 5 символов"
                                    );
                                },
                            }),
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        name='confirm'
                        label='Confirm Pass'
                        dependencies={["password"]}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: "Подтвердите пароль",
                            },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                    if (
                                        !value ||
                                        getFieldValue("password") === value
                                    ) {
                                        return Promise.resolve();
                                    }

                                    return Promise.reject(
                                        "Пароли должны совпадать!"
                                    );
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        name='fullname'
                        label={
                            <span>
                                Nickname&nbsp;
                                <Tooltip title='Как вас зовут?'>
                                    <QuestionCircleOutlined />
                                </Tooltip>
                            </span>
                        }
                        rules={[
                            {
                                required: true,
                                message: "Введите имя!",
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type='primary' htmlType='submit'>
                            Регистрация
                        </Button>
                    </Form.Item>
                    <Link to={"/"}>Войти</Link>
                </Form>
            </Block>
        </Fragment>
    );
};

// export default RegisterForm;

export default connect(({ user }) => user, userActions)(RegisterForm);
