import React from "react";
import { Link, Switch } from "react-router-dom";

export default function() {
  return (
    <>
      <h2 className="text-danger">Error 404, page not found</h2>
      <hr />
      <div className="alert alert-warning">
        <p>
          Go to <Link to="/">home page</Link>
        </p>
      </div>
    </>
  );
}
