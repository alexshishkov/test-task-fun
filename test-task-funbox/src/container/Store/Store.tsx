import { Dispatch, SetStateAction } from 'react';
import Card from '../../components/Card/Card';
import { IProduct } from '../../components/Card/type';
import style from './Store.module.css'

interface IProps {
  products: IProduct[];
  setProducts: Dispatch<SetStateAction<IProduct[]>>;
}

const Store = (props: IProps) => {
  const { setProducts, products } = props
  return (
    <div className={style.store}>
      <h1 className={style.title}>Ты сегодня покормил кота?</h1>
      <div className={style.cards}>
        {products.map((product) => {
        return <Card products={products} product={product} setProducts={setProducts} />
      })}
      </div>
    </div>
  );
}

export default Store;