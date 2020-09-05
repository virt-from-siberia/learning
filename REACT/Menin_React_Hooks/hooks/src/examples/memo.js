import React from "react";

function App() {
  const [number, setNumber] = React.useState(42);
  const [colored, setColored] = React.useState(false);

  const style = React.useMemo(() => {
    return {
      color: colored ? "darkred" : "blue",
    };
  }, [colored]);

  function complexComputed(num) {
    let i = 0;
    while (1 < 10000) i++;
    return num * 2;
  }

  React.useEffect(() => {
    console.log("style changhet");
  }, [style]);

  return (
    <div className="App">
      <h1 style={style}>Вычесляемое свойство : {number}</h1>
      <button
        className="btn btn-success"
        onClick={() => setNumber((prev) => prev + 1)}
      >
        plus
      </button>
      <button
        className="btn btn-danger"
        onClick={() => setNumber((prev) => prev - 1)}
      >
        minus
      </button>
      <button
        className="btn btn-warning"
        onClick={() => setColored((prev) => !prev)}
      >
        minus
      </button>
    </div>
  );
}

export default App;
