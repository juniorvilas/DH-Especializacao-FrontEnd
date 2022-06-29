import axios from "axios";

export const SAVE_ORDER_REQUEST = 'SAVE_ORDER_REQUEST';
export const SAVE_ORDER_SUCCESS = 'SAVE_ORDER_SUCCESS';
export const CLEAR_ORDER = 'CLEAR_ORDER';

type Product = {
    id: number;
    title: string;
}


export const clearOrder = () => {
    return {
        type: CLEAR_ORDER,
        payload: [],
    }
}

export const saveOrderRequest = () => {
    return { type: SAVE_ORDER_REQUEST };
};

export const saveOrderSuccess = (products: Product[]) => {
    return {
        type: SAVE_ORDER_SUCCESS,
        payload: { products },
    }
}

export const saveOrder = () => async (dispatch: any) => {
    const { data } = await axios.get('https://fakestoreapi.com/products');

    await new Promise(resolve => setTimeout(resolve, 2500));

    dispatch(saveOrderSuccess(data));
}