import { all } from "redux-saga/effects";
import { watchGetUser, watchLogin } from "./watchAuthSaga";
import { watchFailedSagas } from "./watchErrorSaga";

export default function* rootSaga() {
  yield all([watchLogin(), watchGetUser(), watchFailedSagas()]);
}
