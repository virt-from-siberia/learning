import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, setUserProfile } from "../../redux/profileReducer";
import { withRouter } from "react-router";
import { withAuthRedirect } from "../../hoc/authRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    getUserProfile(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}
const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default compose(
  connect(mapStateToProps, { setUserProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
