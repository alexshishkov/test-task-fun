import { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import { IProduct } from '../../components/Card/type';
import style from './Store.module.css'

interface IProps {
  products: IProduct[];
  setProducts: Dispatch<SetStateAction<IProduct[]>>;
  setActiveArr: React.Dispatch<React.SetStateAction<number[]>>;
  activeArr: number[];
}

const Store = (props: IProps) => {
  const { setProducts, products, setActiveArr, activeArr } = props
  return (
    <div className={style.store}>
      <div>{activeArr.length === 1 && <Link to="/form"><h2>Изменить карточку</h2></Link>} </div>
      <h1 className={style.title}>Ты сегодня покормил кота?</h1>
      <div className={style.cards}>
        {products.map((product) => {
        return <Card products={products} product={product} setProducts={setProducts} setActiveArr={setActiveArr} activeArr={activeArr}/>
      })}
      </div>
    </div>
  );
}

export default Store;