import React from "react";
import ItemsList from "./itemList";

function App() {
  const [count, setCount] = React.useState(1);
  const [colored, setColored] = React.useState(false);

  const style = {
    color: colored ? "darkred" : "blue",
  };

  const generateItemsFromApi = React.useCallback(() => {
    return new Array(count).fill(" ").map((_, index) => `Элемент ${index + 1}`);
  }, [count]);

  return (
    <div className="App">
      <h1 style={style}>Количество элементов : {count}</h1>
      <button
        className="btn btn-success"
        onClick={() => setCount((prev) => prev + 1)}
      >
        plus
      </button>
      <button
        className="btn btn-warning"
        onClick={() => setColored((prev) => !prev)}
      >
        minus
      </button>
      <ItemsList getItems={generateItemsFromApi} />
    </div>
  );
}

export default App;
