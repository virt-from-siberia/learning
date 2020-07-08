import React from "react";
import "./webPage.css";
import CarList from "../containers/carList";
import Details from "../containers/details";

const webPage = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <h2>Cars : </h2>
                    <CarList />
                </div>
                <div className='col-6'>
                    <hr />
                    <p>Details : </p>
                    <Details />
                </div>
            </div>
        </div>
    );
};
export default webPage;
