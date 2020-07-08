import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { select } from "../actions/index";

class carList extends Component {
    createList() {
        const { cars, select } = this.props;

        return cars.map(car => {
            return (
                <li onClick={() => select(car)} key={car.id}>
                    <p>{car.name}</p>
                    <img src={car.img} style={{ width: "200px" }} />
                    <p>
                        speed : <b>{car.speed}</b>
                    </p>
                    <p>
                        weight: <b>{car.weight}</b>
                    </p>
                </li>
            );
        });
    }

    render() {
        return <ol>{this.createList()}</ol>;
    }
}

function mapSateToProps(state) {
    return {
        cars: state.cars
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ select: select }, dispatch);
}

export default connect(mapSateToProps, matchDispatchToProps)(carList);
