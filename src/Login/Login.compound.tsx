import { GET_USER } from "../actions/auth";
import Login from "./Login";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const mapStateToProps = (state: any) => {
  return {
    user: "h"
  };
};

const mapDispatchToProps = (dispatch: any) => {
  const dispatchActions = {
    requestUser: GET_USER.request
  };
  return bindActionCreators(dispatchActions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
