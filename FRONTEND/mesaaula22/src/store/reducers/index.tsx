import { fetchProductsReducer } from "./fetchProductsReducer";
import { combineReducers } from "redux";

export const reducers = combineReducers({
    fetch: fetchProductsReducer,
})
