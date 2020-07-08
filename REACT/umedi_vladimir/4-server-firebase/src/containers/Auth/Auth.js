import React, { Component } from "react";
import classes from "./Auth.css";
import Buton from "../../components/UI/Button/Button";
import Input from "../../components/UI/input/input";
import is from "is_js";
import axios from "axios";

export default class Auth extends Component {
  state = {
    isFormValid: false,
    formControls: {
      email: {
        value: "",
        type: "email",
        label: "Email",
        errorMessage: "Введите корректный емаел",
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true
        }
      },
      password: {
        value: "",
        type: "password",
        label: "Password",
        errorMessage: "Введенный паронь не корректен",
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6
        }
      }
    }
  };

  loginHandler = async () => {
    const authData = {
      email: this.state.formControls.email.value,
      password: this.state.formControls.password.value,
      returnSecureToken: true
    };
    try {
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAhTizWYLNBN7AADPJhLjZdvJ4pnLBpGpE",
        authData
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  registerHandler = async () => {
    const authData = {
      email: this.state.formControls.email.value,
      password: this.state.formControls.password.value,
      returnSecureToken: true
    };
    try {
      const response = await axios.post(
        " https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAhTizWYLNBN7AADPJhLjZdvJ4pnLBpGpE",
        authData
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  submitHandler = evt => {
    evt.preventDefault();
  };

  validateControl(value, validation) {
    if (!validation) {
      return true;
    }
    let isValid = true;

    if (validation.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (validation.email) {
      isValid = is.email(value) && isValid;
    }
    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid;
    }
    return isValid;
  }

  onChangeHandler = (evt, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };

    control.value = evt.target.value;
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation);

    formControls[controlName] = control;

    let isFormValid = true;

    Object.keys(formControls).forEach(name => {
      isFormValid = formControls[name].valid && isFormValid;
    });

    this.setState({
      formControls: formControls,
      isFormValid: isFormValid
    });
  };

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      return (
        <Input
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          errorMessage={control.errorMessage}
          shouldValidate={!!control.validation}
          onChange={event => {
            this.onChangeHandler(event, controlName);
          }}
        />
      );
    });
  }

  render() {
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Авторизация</h1>
          <form onSubmit={this.submitHandler} className={classes.Authform}>
            {this.renderInputs()}
            <Buton
              type="success"
              onClick={this.loginHandler}
              disabled={!this.state.isFormValid}
            >
              Войти
            </Buton>

            <Buton
              type="primary"
              onClick={this.registerHandler}
              disabled={!this.state.isFormValid}
            >
              Зарегистрироватся
            </Buton>
          </form>
        </div>
      </div>
    );
  }
}
