import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { actions } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { AppStateType } from "../../redux/redux-store";

const mapStateToProps = (state: AppStateType) => {
  return {
    dialogsPage: state.dialogsPage
  };
};

export default compose(
  connect(mapStateToProps, {
    ...actions
  }),
  withAuthRedirect
)(Dialogs);
