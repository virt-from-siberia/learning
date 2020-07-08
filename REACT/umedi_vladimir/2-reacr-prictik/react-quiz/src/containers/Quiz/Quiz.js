import React, { Component } from "react";
import classes from "./Quiz.scss";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/finishedQuiz/finishedQuiz";

class Quiz extends Component {
  state = {
    resaults: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        question: "Какого цвета небо",
        rightAnswerId: 1,
        id: 1,
        answers: [
          { text: "Черный", id: 1 },
          { text: "Синий", id: 2 },
          { text: "Голубой", id: 3 },
          { text: "Красный", id: 4 }
        ]
      },
      {
        question: "В каком году основали Санкт Питербург?",
        rightAnswerId: 3,
        id: 2,
        answers: [
          { text: "1700", id: 1 },
          { text: "1705", id: 2 },
          { text: "1703", id: 3 },
          { text: "1803", id: 4 }
        ]
      }
    ]
  };

  onAnswerClickHandler = answerID => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];

      if (this.state.answerState == "success") {
        return;
      }
    }

    const question = this.state.quiz[this.state.activeQuestion];
    const resaults = this.state.resaults;

    if (question.rightAnswerId == answerID) {
      if (!resaults[question.id]) {
        resaults[question.id] = "success";
      }
      this.setState({
        answerState: { [answerID]: "success" },
        resaults: resaults
      });

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true
          });
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1
          });
        }
        window.clearTimeout(timeout);
      }, 1000);
    } else {
      resaults[question.id] = "error";

      this.setState({
        answerState: { [answerID]: "error" },
        resaults: resaults
      });
    }
  };
  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      resaults: {}
    });
  };

  componentDidMount() {
    console.log("Quiz ID = ", this.props.match.params.id);
  }

  render() {
    console.log(classes);
    // JSX:
    return (
      <div className="quiz">
        <div className="quizWrapper">
          <h1>Ответьте на все вопросы</h1>

          {this.state.isFinished ? (
            <FinishedQuiz
              resaults={this.state.resaults}
              quiz={this.state.quiz}
              onRetry={this.retryHandler}
            />
          ) : (
            <ActiveQuiz
              answers={this.state.quiz[this.state.activeQuestion].answers}
              question={this.state.quiz[this.state.activeQuestion].question}
              onAnswerClick={this.onAnswerClickHandler}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Quiz;
