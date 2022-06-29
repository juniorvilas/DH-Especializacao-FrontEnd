import {legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { reducers } from "./reducers";

// @ts-ignore
const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__) || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;