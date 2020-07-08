import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore, bindActionCreators } from "redux";
import { connect, Provider } from "react-redux";
import { rootReducer } from "../store/reducers";
import { changeFirstName, changeSecondName } from "../store/actions";

export const ACTION_CHANGE_FIRST_NAME = "ACTION_CHANGE_FIRST_NAME";
export const ACTION_CHANGE_SECOND_NAME = "ACTION_CHANGE_SECOND_NAME";

const store = createStore(rootReducer);

class MainComponent extends Component {
    render() {
        //NOTE/: props
        const {
            firstName,
            secondName,
            changeFirstName,
            changeSecondName
        } = this.props;

        return (
            <div>
                <div>
                    <input
                        type='text'
                        placeholder='First Name'
                        value={firstName}
                        onChange={evt => {
                            changeFirstName(evt.target.value);
                        }}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        placeholder='Second Name'
                        value={secondName}
                        onChange={evt => {
                            changeSecondName(evt.target.value);
                        }}
                    />
                </div>
                <div>{firstName}</div>
                <div>{secondName}</div>
            </div>
        );
    }
}

//NOTE/: Подключяем state в connector
const mapStateToProps = state => {
    return {
        firstName: state.firstName,
        secondName: state.secondName
    };
};

//NOTE/: Подключяем actions в props
const mapDispatchToProps = dispatch => {
    return {
        changeFirstName: bindActionCreators(changeFirstName, dispatch),
        changeSecondName: bindActionCreators(changeSecondName, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
