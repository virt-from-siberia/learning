import React from "react";
import classes from "./ActiveQuiz.scss";
import AnswersList from "./answersList/answersList";

const ActiveQuiz = props => {
  console.log("activeQUIZ: ", props);
  return (
    <div className="activeQuiz">
      <p className="question">
        <span>
          <strong>{props.answerNumber}</strong>&nbsp; {props.question}
        </span>
        <small>
          {props.answerNumber} из {props.quizLength}
        </small>
      </p>
      <ul>
        <AnswersList
          state={props.state}
          answers={props.answers}
          onAnswerClick={props.onAnswerClick}
        />
      </ul>
    </div>
  );
};
export default ActiveQuiz;
