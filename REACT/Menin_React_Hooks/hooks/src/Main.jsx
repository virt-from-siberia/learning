import React from "react";

export default function Main({ toggle }) {
  console.log(toggle);
  return (
    <div>
      <h1>Hello world from Context</h1>
      <button onClick={toggle} className="btn btn-success">
        show alert
      </button>
    </div>
  );
}
