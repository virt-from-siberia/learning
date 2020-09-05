import React from "react";

function computeInitialCounter() {
  console.log("Some colculations...");
  return Math.trunc(Math.random() * 20);
}

function App() {
  const [count, setCount] = React.useState(() => {
    return computeInitialCounter();
  });

  const [state, setState] = React.useState({
    title: "Счетчик",
    date: Date.now(),
  });

  function incriment() {
    setCount((prevCouner) => {
      return prevCouner + 1;
    });
    setCount((prevCouner) => {
      return prevCouner + 1;
    });
  }
  function decriment() {
    if (count !== 0) {
      setCount(count - 1);
    }
  }

  function updateTitle() {
    setState({
      ...state,
      title: "новое название",
    });
  }
  return (
    <div className="App">
      <h1>Счетчик</h1>
      <h1>{count}</h1>
      <button className="btn btn-success" onClick={incriment}>
        Добавить
      </button>
      <button className="btn btn-danger" onClick={decriment}>
        Убавить
      </button>
      <button className="btn btn-default" onClick={updateTitle}>
        Изменить название
      </button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
