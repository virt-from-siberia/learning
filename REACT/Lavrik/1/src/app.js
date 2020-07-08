import React from "react";
import CounterClass from "./counters/class";
import CounterFunction from "./counters/funcion";

export default props => {
  return (
    <div>
      <h2> Counter as class</h2>
      <CounterClass min={1} max={5} />
      <h2> Counter as function</h2>
      <CounterFunction />
    </div>
  );
};
