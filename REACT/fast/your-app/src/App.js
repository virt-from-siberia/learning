import React from "react";
import queryString from "query-string";

function App() {
  const parsed = queryString.parse(window.location.search);
  console.log(parsed);

  return <h1>hello world</h1>;
}

export default App;
