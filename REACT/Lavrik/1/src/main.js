import React from "react";
import ReactDom from "react-dom";
import App from "./app";
// let hr = React.createElement("hr");
// let div = React.createElement("div", { className: "test" }, [hr]);

ReactDom.render(<App name="Hello" age={1} />, document.querySelector("#app"));
