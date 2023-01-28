import { useState } from 'react';
import './App.css';
import { IProduct } from './components/Card/type';
import Store from './container/Store/Store';
import products from './products';

function App() {
  const [productsArr, setProductsArr] = useState<IProduct[]>(products);
  return (
    <div className="App">
      <Store products={productsArr} setProducts={setProductsArr} />
    </div>
  );
}

export default App;
