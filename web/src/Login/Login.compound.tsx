import { GET_TOKEN } from "../actions/auth";
import Login from "./Login";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch: any) => {
  const dispatchActions = {
    requestLogin: GET_TOKEN.request
  };
  return bindActionCreators(dispatchActions, dispatch);
};

export default connect(
  () => ({}),
  mapDispatchToProps
)(Login);
