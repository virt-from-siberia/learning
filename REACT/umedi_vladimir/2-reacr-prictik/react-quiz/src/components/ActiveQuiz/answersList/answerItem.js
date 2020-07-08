import React from "react";
import classes from "./answerItem.scss";

const AnswerItem = props => {
  const scssClasses = ["aswerItem"];

  if (props.state) {
    scssClasses.push(props.state.toString());
  }

  // JSX:
  return (
    <li
      className={scssClasses.join(" ")}
      // className="aswerItem"
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      {props.answer.text}
    </li>
  );
};

export default AnswerItem;
