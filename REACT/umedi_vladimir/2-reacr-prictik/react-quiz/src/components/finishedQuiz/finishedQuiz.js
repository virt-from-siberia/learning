import React from "react";
import classes from "./finishedQuiz.scss";
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";

const FinishedQuiz = props => {
  const successCount = Object.keys(props.resaults).reduce((total, key) => {
    if (props.resaults[key] === "success") {
      total++;
    }
    return total;
  }, 0);

  // JSX:
  return (
    <div className="finishedQuiz">
      <ul>
        {props.quiz.map((quizItem, index) => {
          const cls = [
            "fas",
            props.resaults[quizItem.id] == "error" ? "fa-times" : "fa-check",
            classes[props.resaults[quizItem.id]]
          ];

          return (
            <li key={index}>
              <strong>{index + 1}</strong>.&nbsp;
              {quizItem.question}
              <i className={cls.join(" ")} />
            </li>
          );
        })}
      </ul>

      <p>
        Правильно {successCount} из {props.quiz.length}
      </p>

      <div>
        <Button onClick={props.onRetry} type="primary">
          Повторить
        </Button>
        <Link to={"/"}>
          <Button type="success">Перейти в список тестов</Button>
        </Link>
      </div>
    </div>
  );
};

export default FinishedQuiz;
