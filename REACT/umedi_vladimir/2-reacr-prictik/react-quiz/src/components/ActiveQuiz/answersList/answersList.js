import React from "react";
import classes from "./answersList.scss";
import AnswerItem from "./answerItem";

const AnswersList = props => {
  // JSX:
  return (
    <ul className="answersList">
      {props.answers.map((answer, index) => {
        return (
          <AnswerItem
            key={index}
            answer={answer}
            onAnswerClick={props.onAnswerClick}
            state={props.state ? props.state[answer.id] : null}
          />
        );
      })}
    </ul>
  );
};

export default AnswersList;
