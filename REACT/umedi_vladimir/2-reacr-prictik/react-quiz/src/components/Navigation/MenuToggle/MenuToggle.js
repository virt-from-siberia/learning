import React from "react";
import classes from "./MenuToggle.scss";

const MenuToggle = props => {
  const cls = ["MenuToggle", "fas"];
  if (props.isOpen) {
    cls.push("fa-times");
    cls.push("open");
  } else {
    cls.push("fa-bars");
  }

  return <i className={cls.join(" ")} onClick={props.onToggle} />;
};

export default MenuToggle;
