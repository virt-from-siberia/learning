import React from "react";

import "./App.css";
import ClassComponent from "./ClassComponent";

function App() {
  const [visibleList, setVisiblelist] = React.useState(true);

  const changeVisible = () => {
    setVisiblelist((visible) => !visible);
  };

  return (
    <div className='App'>
      {visibleList && <ClassComponent />}
      <button onClick={changeVisible}>Показать / скрыть</button>
    </div>
  );
}

export default App;
