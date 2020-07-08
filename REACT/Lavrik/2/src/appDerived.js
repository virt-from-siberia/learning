import React, { useState } from "react";
import CounterClass from "./counters/class";
import CounterFunction from "./counters/funcion";
import HW1 from "./hw/oneSimple";
import HW2 from "./hw/twoSimple";
import HW3 from "./hw/lazy";

export default props => {
  let [somMin, setSomMin] = useState(20);
  return (
    <div>
      <h2> home work 1 simple</h2>
      <HW1 min={1} max={5} />
      <h2> home work 2 input</h2>
      <HW2 min={1} max={5} />
      <h2> home work 3 lazy</h2>
      <HW3 min={somMin} max={50} />
    </div>
  );
};
