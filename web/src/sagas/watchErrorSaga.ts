import { takeLatest, put } from "redux-saga/effects";
import { Action } from "redux";
import { push } from "connected-react-router";

export function* watchFailedSagas() {
  yield takeLatest(
    (action: Action) => action.type.startsWith("FAILED"),
    function*() {
      yield put(push("/login"));
    }
  );
}
