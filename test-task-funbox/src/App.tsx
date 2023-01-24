import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { IProduct } from './components/Card/type';
import Form from './components/Form/Form';
import Store from './container/Store/Store';
import products from './products';

function App() {
  const [productsArr, setProductsArr] = useState<IProduct[]>(products);
  const [activeArr, setActiveArr] = useState<number[]>([]);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/form"
          element={<Form products={productsArr} setProducts={setProductsArr} activeArr={activeArr}/>}
        />
         <Route
          path="/"
          element={<Store products={productsArr} setProducts={setProductsArr} activeArr={activeArr} setActiveArr={setActiveArr}/>}
        />
      </Routes>
    </div>
  );
}

export default App;
