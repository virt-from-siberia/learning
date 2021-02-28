import React from "react";

function App() {
  const [type, setType] = React.useState("users");
  const [data, setData] = React.useState([]);
  const [pos, setPos] = React.useState({
    x: 0,
    y: 0,
  });

  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [type]);

  const mouseMoveHandler = (evt) => {
    setPos({
      x: evt.clientX,
      y: evt.clientY,
    });
  };

  React.useEffect(() => {
    console.log("componentDidMount");

    window.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <div className="App">
      <h1>Ресурс : {type}</h1>
      <button onClick={() => setType("users")}>Пользователи</button>
      <button onClick={() => setType("todos")}>Todo</button>
      <button onClick={() => setType("posts")}>Посты</button>
      <hr />
      <div
        style={{
          height: "200px",
          overflow: "scroll",
          boxShadow: "1px 2px 3px   grey",
          borderTop: "1px solid grey",
          marginTop: "10px",
        }}
      >
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
      <div
        style={{
          height: "200px",
          overflow: "scroll",
          boxShadow: "1px 2px 3px   grey",
          borderTop: "1px solid grey",
          marginTop: "10px",
        }}
      >
        {" "}
        <pre>{JSON.stringify(pos, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
