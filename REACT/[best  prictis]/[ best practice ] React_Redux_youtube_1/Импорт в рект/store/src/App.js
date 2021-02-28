import React from "react";
import "./App.css";
import { connect } from "react-redux";

const App = () => {
    return (
        <div className='App'>
            <div>
                <input type='text' placeholder='Fiirst Name' />
            </div>
            <div>
                <input type='text' placeholder='Second Name' />
            </div>
            <div></div>
        </div>
    );
};

export default connect()(App);
