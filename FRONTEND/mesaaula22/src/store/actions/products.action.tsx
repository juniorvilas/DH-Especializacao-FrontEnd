import axios from "axios";

export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';



type Product = {
    id: number;
    title: string;
}

export const  fetchProductsStarted = () => {
    return { type: FETCH_PRODUCTS_START };
};

export const fetchProductsSuccess = (products: Product[]) => {
    return {
        type: FETCH_PRODUCTS_START,
        payload: { products },
    }
}

export const fetchProductsError = (errorMessage: string) => {
    return {
        type: FETCH_PRODUCTS_ERROR,
        payload: { errorMessage },
    }
}


export const fetchProductsThunk = () => async (dispatch: any) => {
    dispatch(fetchProductsStarted());
    try {
        const { data } = await axios.get('http://localhost:3001/products');
        const json = JSON.parse(data);
        dispatch(fetchProductsSuccess(json));
    } catch (error: any) {
        dispatch(fetchProductsError(error));
    }
   

   // await new Promise(resolve => setTimeout(resolve, 2500));

    
}