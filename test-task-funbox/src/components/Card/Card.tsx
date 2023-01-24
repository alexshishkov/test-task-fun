import { Dispatch, SetStateAction } from 'react';
import style from './Card.module.css'
import { IProduct } from './type';

interface IProps {
  products: IProduct[];
  product: IProduct;
  setProducts: Dispatch<SetStateAction<IProduct[]>>;
  setActiveArr: React.Dispatch<React.SetStateAction<number[]>>;
  activeArr: number[];
}

const Card = (props: IProps) => {
  const { product, setProducts, products, setActiveArr, activeArr } = props

  const createActiveArr = (num: number) => {
    const productsArr = [...products]
    productsArr[num].active === false ? productsArr[num].active = true : productsArr[num].active = false
    productsArr[num].wasChosen === false ? productsArr[num].wasChosen = true : productsArr[num].wasChosen = false
    productsArr[product.id].massage = 'Сказочное заморское яство'
    setProducts(productsArr)
    const activeArray = [...activeArr]
    let myIndex = activeArray.indexOf(num);
    activeArray.includes(num) === false ? activeArray.push(num) : activeArray.splice(myIndex, 1)
    setActiveArr(activeArray)
  }

  const cancelPurchase = () => {
    const productsArr = [...products]
    productsArr[product.id].wasChosen === true ? productsArr[product.id].massage = 'Котэ не одобряет?' : productsArr[product.id].massage = 'Сказочное заморское яство'
    setProducts(productsArr)
  }

  const notCancelPurchase = () => {
    const productsArr = [...products]
    if (productsArr[product.id].wasChosen === true) {
      productsArr[product.id].massage = 'Сказочное заморское яство'
    }
    setProducts(productsArr)
  }

  return (
    <div>
      <div className={
        product.active === false
          ?
          style.card
          :
          style.cardActive}
        onMouseEnter={cancelPurchase}
        onMouseLeave={notCancelPurchase}
        onClick={() => createActiveArr(product.id)}
      >
        <div className={style.content}>
          <div className={style.massage}>
            {product.massage} 
          </div>
          <div className={style.title}>
            {product.title}
          </div>
          <div className={style.subTitle}>
            {product.subTitle}
          </div>
          <div className={style.servings}>
            {product.numberOfServings} порций
          </div>
          <div className={style.present}>
            {product.present}
          </div>
        </div>
        <div className={style.contentBottom}>
          <div className={style.img}></div>
          <div className={
            product.active === false
              ?
              style.weight
              :
              style.weightActive}
          >
            <p>{product.weight}</p>
            <p>кг</p>
          </div>
        </div> 
      </div>
      {product.active === false
        ?
        <div className={style.status}>Чего сидишь? Порадуй котэ,
          <span className={style.buy} onClick={() => createActiveArr(product.id)}> купи.</span>
        </div>
        :
        <div className={style.status}>{product.description}</div>
      }

    </div>
  );
}

export default Card;