import React from "react";
import Registration from "./components/Registration";
import Auth from "./components/Auth";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers";

const store = createStore(rootReducer);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className='wrapper'>
                    <h1>Complex State</h1>

                    <div className='forms'>
                        <Auth />
                        <hr />
                        <Registration />
                    </div>
                </div>
            </Provider>
        );
    }
}
