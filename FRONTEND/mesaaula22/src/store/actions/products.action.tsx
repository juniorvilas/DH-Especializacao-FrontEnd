import axios from "axios";

export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';



type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
      }
}

export const  fetchProductsStarted = () => {
    return { type: FETCH_PRODUCTS_START };
};

export const fetchProductsSuccess = (products: Product[]) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
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
    await new Promise(resolve => setTimeout(resolve, 2500));
    try {
        const response = await fetch('http://localhost:3001/products'); 
        const json = await response.json();          
        dispatch(fetchProductsSuccess(json));                  

    } catch (error: any) {
        dispatch(fetchProductsError(error.message));
    }    
}

export const filterProductsThunk = (texto: string) => async (dispatch: any) => {
    dispatch(fetchProductsStarted());
    try {
        const response = await fetch(`http://localhost:3001/products?title_like=${texto}`); 
        const json = await response.json();          
        dispatch(fetchProductsSuccess(json));                  

    } catch (error: any) {
        dispatch(fetchProductsError(error.message));
    } 
} 