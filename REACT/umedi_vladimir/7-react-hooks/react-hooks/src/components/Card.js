import React from "react";
import { Link } from "react-router-dom";

export const Card = () => {
  return (
    <div className="card bg-dark">
      <img src="" alt="" className="card-imag-top" />
      <div className="card-body">
        <h3 className="card-title text-light">React JS</h3>
        <Link to={"/profile/" + "react name"} className="btn btn-success">
          Открыть
        </Link>
      </div>
    </div>
  );
};
