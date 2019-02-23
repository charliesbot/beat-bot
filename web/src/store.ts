import { createStore, compose, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import rootReducer from "./reducers";

export const history = createBrowserHistory();

// dev tools middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer(history),
  composeEnhancers(applyMiddleware(routerMiddleware(history)))
);

export default store;
