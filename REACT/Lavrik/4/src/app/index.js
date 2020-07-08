import React from "react";
import styles from "./app.module.css";
import router from "~s/router";
import { observer } from "mobx-react";

export default
@observer
class App extends React.Component {
  saveFormData = (name, value) => {
    let formData = { ...this.state.formData };
    formData[name] = { ...formData[name], value: value };
    this.setState({
      formData: formData
    });
  };

  render() {
    return (
      <div className="container">
        <hr />
        {router.component}
      </div>
    );
  }
}
