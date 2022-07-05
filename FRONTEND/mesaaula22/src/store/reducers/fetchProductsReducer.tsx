import {FETCH_PRODUCTS_START, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR} from '../actions/products.action';
 
 type ActionType = {
    type: string;
    payload?: any;
};

const initialState = {
    products: [],
    isFetching: false,
    errorMessage: undefined,    
}

export const fetchProductsReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case FETCH_PRODUCTS_START: 
        return {
            ...state,
            isFetching: true,
        }
        case FETCH_PRODUCTS_SUCCESS: 
        return {
            ...state,
            isFetching: false,
            errorMessage: initialState.errorMessage,
            products: action.payload.products,
        }
        case FETCH_PRODUCTS_ERROR:
        return {
            ...state,
            isFetching: false,
            products: initialState.products,
            errorMessage: action.payload,
        }
        default:
            return state;
    }

}