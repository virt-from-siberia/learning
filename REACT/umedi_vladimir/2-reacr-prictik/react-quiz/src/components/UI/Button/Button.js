import React from "react";
import classes from "./Button.scss";

const Button = props => {
  const cls = ["button", props.type];

  return (
    <button
      onClick={props.onClick}
      className={cls.join(" ")}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
