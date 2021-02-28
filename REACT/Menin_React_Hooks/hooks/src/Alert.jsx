import React from "react";
import AlertContext from "./App";

export default function Alert() {
  console.log(AlertContext);
  const alert = React.useContext(AlertContext);
  console.log(alert);

  if (!alert) {
    return false;
  }
  return (
    <div className="alert alert-danger">
      <p>Это очень важное сообшение</p>
    </div>
  );
}
