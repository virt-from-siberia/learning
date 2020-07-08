import React, { Component } from "react";
import { connect } from "react-redux";

class Details extends Component {
    render() {
        const { car } = this.props;

        if (!car) {
            return <p>Выберете автомобиль</p>;
        }
        return (
            <div>
                <h2>{car.name}</h2>
                <hr />
                <br />
                <p>{car.desc}</p>
                <hr />
                <div>
                    <img src={car.img} style={{ width: "350px" }} />
                </div>
                <hr />
                <p>Скорость : {car.speed}</p>
                <hr />
                <p>Вес : {car.weight}</p>
            </div>
        );
    }
}

function mapSateToProps(state) {
    return {
        car: state.active
    };
}

export default connect(mapSateToProps)(Details);
