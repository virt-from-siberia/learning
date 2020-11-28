import React from "react";

import Debug from "./Debug";
import { connect } from "react-redux";

const DebugContainer = (props) => {
    return <Debug {...props} />;
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        registration: state.registration,
    };
};

export default connect(mapStateToProps)(DebugContainer);
