import React from "react";
import { ClickedContext } from "../App";

export default props => {
  return (
    <div style={{ border: "1px solid #ccc" }}>
      <h3>Counter TWO</h3>
      <ClickedContext.Consumer>
        {clicked => (clicked ? <p>Clicked</p> : null)}
      </ClickedContext.Consumer>
    </div>
  );
};
