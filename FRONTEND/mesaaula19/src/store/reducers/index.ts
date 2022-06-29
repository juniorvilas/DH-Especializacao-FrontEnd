import { combineReducers } from "redux";

import { orderReducer } from "./order";

export const reducers = combineReducers({
    order: orderReducer,
})