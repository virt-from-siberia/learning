import React from "react";
import { bindActionCreators } from "redux";
import { changeFirstName, changeSecondName } from "../store/actions";
import { connect } from "react-redux";

const MainComponent = (state) => {
    console.log(state);
    return (
        <div className='App'>
            <div>
                <input
                    type='text'
                    value={state.firstName}
                    placeholder='Fiirst Name'
                    onChange={(evt) => {
                        state.changeFirstName(evt.target.value);
                    }}
                />
            </div>
            <div>
                <input
                    type='text'
                    value={state.secondName}
                    placeholder='Second Name'
                    onChange={(evt) => {
                        state.changeSecondName(evt.target.value);
                    }}
                />
            </div>
            <div>
                <p>{state.firstName}</p>
                <p>{state.secondName}</p>
            </div>
        </div>
    );
};

//этот метод будет записывать данные из стейта в пропсы этого компонента
const putStateToProps = (state) => {
    console.log(state);
    return {
        firstName: state.firstName,
        secondName: state.secondName,
    };
};

const putDiapatchToProps = (dispatch) => {
    return {
        changeFirstName: bindActionCreators(changeFirstName, dispatch),
        changeSecondName: bindActionCreators(changeSecondName, dispatch),
    };
};
//связывание компонента со сторе
export default connect(putStateToProps, putDiapatchToProps)(MainComponent);
