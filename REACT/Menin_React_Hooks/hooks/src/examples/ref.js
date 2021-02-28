import React from "react";

function App() {
  // const [renderCount, setRenderCount] = React.useState(1);
  const [value, setValue] = React.useState("initial");
  const renderCount = React.useRef(1);
  const inputRef = React.useRef(null);
  const prevVaue = React.useRef("");

  React.useEffect(() => {
    renderCount.current++;
    console.log(inputRef.current.value);
  });

  React.useEffect(() => {
    prevVaue.current = value;
  }, [value]);

  const focus = () => inputRef.current.focus();

  return (
    <div className="App">
      <h1>renderCount : {renderCount.current}</h1>
      <input
        ref={inputRef}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="btn btn-success" onClick={focus}>
        Focus
      </button>
    </div>
  );
}

export default App;
