import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { GET_TOKEN } from "../../actions/auth";
import Login from "./Login";

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
