import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux'
import './App.css';

import { connect } from 'react-redux';
import { fetchProductsThunk, fetchProductsStarted } from './store/actions/products.action'

type GlobalState = {
  products: {
    products: {
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
    }[];
    isFetching: boolean;
  }
}

function App() {
  const products = useSelector((state: GlobalState) => state.products);
  const dispatch = useDispatch();
  console.log(products);


  useEffect(() => {   

    dispatch(fetchProductsStarted());
    fetchProductsThunk()(dispatch);
    console.log("useEffect")
    
  });

  function handleSaveOrder() {
    dispatch(fetchProductsStarted());
    fetchProductsThunk()(dispatch);
  }


  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={handleSaveOrder}>Salvar</button>
        {products.isFetching && <span>Carregando...</span>}
        {products.products && products.products.map((product: any) => (
            <div key={product.id}>
              <p>{product.title}</p>
            </div>
          ))}
      </header>
    </div>
  );
}


const mapStateToProps = (state: any) => ({
 products: state,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    { fetchProductsThunk },
   dispatch,
 );

export default connect(mapStateToProps, mapDispatchToProps)(App);


