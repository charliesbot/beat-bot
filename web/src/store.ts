import { createStore, compose } from "redux";
import rootReducer from "./reducers";

// dev tools middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

export default store;
