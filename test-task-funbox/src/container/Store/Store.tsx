import Card from '../../components/Card/Card';
import products from '../../products';
import style from './Store.module.css'

const Store = () => {
  return (
    <div className={style.store}>
      <h1 className={style.title}>Ты сегодня покормил кота?</h1>
      <div className={style.cards}>
        {products.map((product) => {
        return <Card product={product}/>
      })}
      </div>
    </div>
  );
}

export default Store;