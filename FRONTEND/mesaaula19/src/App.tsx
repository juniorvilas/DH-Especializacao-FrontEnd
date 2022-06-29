import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import { saveOrderRequest, saveOrder , clearOrder } from './store/actions/order.action';

type GlobalState = {
  order: {
    products: {
      id: number;
      title: string;
    }[];
    isLoading: boolean;
  }
}

function App() {

  const order = useSelector((state: GlobalState) => state.order);
  const dispatch = useDispatch();

  function handleSaveOrder() {
    dispatch(saveOrderRequest());
    saveOrder()(dispatch);
  }

  function handleClearOrder() {
    dispatch(clearOrder());
  }


  return (
    <div className="App">
      <header className="App-header">
      <>
          <button type="button" onClick={handleSaveOrder}>Salvar</button>
          <button type="button" onClick={handleClearOrder}>Clear</button>
          <hr />
          {order.isLoading && <span>Carregando...</span>}
          {order.products && order.products.map((product: any) => (
            <div key={product.id}>
              <p>{product.title}</p>
            </div>
          ))}
        </>
      </header>
    </div>
  );
}

export default App;
