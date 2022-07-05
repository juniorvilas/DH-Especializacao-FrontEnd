import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux'
import './App.css';

import { connect } from 'react-redux';
import { fetchProductsThunk, filterProductsThunk, fetchProductsStarted } from './store/actions/products.action'

type GlobalState = {
  prod: {
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
    errorMessage: string;
  }
}

function App() {
  const prod = useSelector((state: GlobalState) => state.prod);
  const dispatch = useDispatch();  
  const [texto, setTexto] = useState();

  useEffect(() => {   

    dispatch(fetchProductsStarted());
    fetchProductsThunk()(dispatch);   

  },[dispatch]);

const handlerClick = () => {
  if (!texto) {
    fetchProductsThunk()(dispatch);  
  } else {
    filterProductsThunk(texto)(dispatch);
  }
}

const handlerOnChange = (e: any) =>  {
  setTexto(e.target.value);
}


  return (
    <div className="App">
      <header className="App-header">
       <input style={{margin: 20}} type="text" value={texto} onChange={handlerOnChange} />
       <button type="button" onClick={handlerClick}>Pesquisar</button>
        {prod.errorMessage && <span>Opa deu erro: {prod.errorMessage}</span>}
        {prod.isFetching && <span>Carregando...</span>}
        {prod.products && prod.products.map((product: any) => (
            <div key={product.id}>
              <p>{product.title}</p>
            </div>
          ))}
      </header>
    </div>
  );
}


const mapStateToProps = (state: any) => ({
 products: state.prod.products,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    { fetchProductsThunk, filterProductsThunk },
   dispatch,
 );

export default connect(mapStateToProps, mapDispatchToProps)(App);


