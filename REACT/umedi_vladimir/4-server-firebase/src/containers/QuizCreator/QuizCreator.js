import React, { Component } from "react";
import classes from "./QuizCreator.css";
import Button from "../../components/UI/Button/Button";
import {
  createControl,
  validate,
  validateForm
} from "../../form/formFramework";
import Input from "../../components/UI/input/input";
import Select from "../../components/UI/select/select";
import axios from "../../axios/axios-quiz";

function createOptionControl(number) {
  return createControl(
    {
      label: `Варииант ${number}`,
      errorMessage: "Значение не может быть пустым",
      id: number
    },
    { required: true }
  );
}

function createFormControl() {
  return {
    question: createControl(
      {
        label: "Введите вопрос",
        errorMessage: "Вопрос не может быть пустым"
      },
      { required: true }
    ),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4)
  };
}

export default class QuizCreator extends Component {
  state = {
    quiz: [],
    isFormValid: false,
    rightAnswerId: 1,
    formControls: createFormControl()
  };

  addQuestionHandler = event => {
    event.preventDefault();

    const quiz = this.state.quiz.concat();
    const index = quiz.length + 1;

    const {
      question,
      option1,
      option2,
      option3,
      option4
    } = this.state.formControls;

    const questionItem = {
      question: question.value,
      id: index,
      rightAnswerId: this.state.rightAnswerId,
      answers: [
        {
          text: option1.value,
          id: option1.id
        },
        {
          text: option2.value,
          id: option2.id
        },
        {
          text: option3.value,
          id: option3.id
        },
        {
          text: option4.value,
          id: option4.id
        }
      ]
    };
    quiz.push(questionItem);

    this.setState({
      quiz: quiz,
      isFormValid: false,
      rightAnswerId: 1,
      formControls: createFormControl()
    });
  };

  createQuizHandler = async event => {
    event.preventDefault();

    try {
      await axios.post(
        "quizes.json",
        this.state.quiz
      );
      this.setState({
        quiz: [],
        isFormValid: false,
        rightAnswerId: 1,
        formControls: createFormControl()
      });
    } catch (error) {
      console.log(error);
    }

    // TODO: SERVER
  };

  onChangeHandler = (value, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };

    control.touched = true;
    control.value = value;
    control.valid = validate(control.value, control.validation);

    formControls[controlName] = control;
    this.setState({
      formControls: formControls,
      isFormValid: validateForm(formControls)
    });
  };

  selectChangeHandler = event => {
    this.setState({
      rightAnswerId: +event.target.value
    });
  };

  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];

      return (
        <React.Fragment key={controlName + index}>
          <Input
            label={control.label}
            value={control.value}
            valid={control.valid}
            shouldValidate={!!control.validation}
            touched={control.touched}
            errorMessage={control.errorMessage}
            onChange={event =>
              this.onChangeHandler(event.target.value, controlName)
            }
          />
          {index === 0 ? <hr /> : null}
        </React.Fragment>
      );
    });
  }

  render() {
    const select = (
      <Select
        label="Выберете правельный ответ"
        value={this.state.rightAnswerId}
        onChange={this.selectChangeHandler}
        options={[
          { text: 1, value: 1 },
          { text: 2, value: 2 },
          { text: 3, value: 3 },
          { text: 4, value: 4 }
        ]}
      />
    );

    return (
      <div className={classes.QuizCreator}>
        <div>
          <h1>Создание теста</h1>
          <form
            onSubmit={evt => {
              evt.preventDefault();
            }}
          >
            {this.renderControls()}

            {select}

            <Button
              type="primary"
              onClick={this.addQuestionHandler}
              disabled={!this.state.isFormValid}
            >
              Добавить вопрос
            </Button>

            <Button
              type="success"
              onClick={this.createQuizHandler}
              disabled={this.state.quiz.length === 0}
            >
              Создать тест
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
