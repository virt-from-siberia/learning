import React from "react";

function useLogger(value) {
  React.useEffect(() => {
    console.log("Value changed", value);
  }, [value]);
}

function useInput(initialValue) {
  const [value, setVale] = React.useState(initialValue);

  const onChange = (event) => {
    setVale(event.target.value);
  };

  const clear = () => {
    setVale(" ");
  };

  return {
    bind: {
      value,
      onChange,
    },
    value,
    clear,
  };
}

function App() {
  const input = useInput("");
  const inputLastName = useInput("");

  useLogger(input.value);

  return (
    <div className="container pt-3">
      <input type="text" {...input.bind} />
      <input type="text" {...inputLastName.bind} />

      <button className="btn btn-warning" onClick={() => input.clear()}>
        Очистить
      </button>
      <button className="btn btn-danger" onClick={() => inputLastName.clear()}>
        Очистить
      </button>
      <hr />
      <h1>{input.value}</h1>
      <h1>{inputLastName.value}</h1>
    </div>
  );
}

export default App;
