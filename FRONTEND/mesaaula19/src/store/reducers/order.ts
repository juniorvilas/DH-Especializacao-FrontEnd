import { CLEAR_ORDER, SAVE_ORDER_REQUEST, SAVE_ORDER_SUCCESS } from '../actions/order.action';

type ActionType = {
    type: string;
    payload?: any;
};

const initialState = {
    products: [],
    isLoading: false,
};


export const orderReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case SAVE_ORDER_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case SAVE_ORDER_SUCCESS:
            return {
                ...state,
                products: action.payload.products,
                isLoading: false,
            };
        case CLEAR_ORDER:
            return {                
                products: [],
                isLoading: false,
            };
        default:
            return state;
    }
}