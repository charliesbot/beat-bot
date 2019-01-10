import { createStore, compose, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

// dev tools middleware
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  rootReducer(history),
  compose(
    applyMiddleware(routerMiddleware(history), sagaMiddleware),
    reduxDevTools
  )
);

sagaMiddleware.run(rootSaga);

export default store;
