import classNames from 'classnames';
import { Dispatch, SetStateAction } from 'react';
import style from './Card.module.css'
import { IProduct } from './type';

interface IProps {
  products: IProduct[];
  product: IProduct;
  setProducts: Dispatch<SetStateAction<IProduct[]>>;
}

const NOTACTIVE = 'not active';
const ACTIVE = 'active';
const DISABLED = 'disabled';
const CATAPPROVES = 'Котэ не одобряет?';
const FABULOSFOOD = 'Сказочное заморское яство';

const Card = (props: IProps) => {
  const { product, setProducts, products } = props


  const createActiveArr = (num: number) => {
    const productsArr = [...products]
    if (productsArr[num].active === NOTACTIVE) {
      productsArr[num].active = ACTIVE
    } else if (productsArr[num].active === ACTIVE) {
      productsArr[num].active = DISABLED
    } else if (productsArr[num].active === DISABLED) {
      productsArr[num].active = NOTACTIVE
    }
    productsArr[num].active === ACTIVE ? productsArr[num].wasChosen = true : productsArr[num].wasChosen = false
    productsArr[product.id].massage = FABULOSFOOD
    setProducts(productsArr)
  }

  const cancelPurchase = () => {
    const productsArr = [...products]
    productsArr[product.id].wasChosen === true && product.active === ACTIVE
      ?
      productsArr[product.id].massage = CATAPPROVES
      :
      productsArr[product.id].massage = FABULOSFOOD
    setProducts(productsArr)
  }

  const notCancelPurchase = () => {
    const productsArr = [...products]
    if (productsArr[product.id].wasChosen === true) {
      productsArr[product.id].massage = FABULOSFOOD
    }
    setProducts(productsArr)
  }

  return (
    <div>
      <div className={
        product.active === NOTACTIVE
          ?
          style.card
          :
          product.active === ACTIVE ? style.cardActive : style.cardDisabled
      }
        onMouseEnter={cancelPurchase}
        onMouseLeave={notCancelPurchase}
        onClick={() => createActiveArr(product.id)}
      >
        <div className={product.active === DISABLED ? classNames(style.content, style.contentDisabled) : style.content}>
          <div className={
            product.massage === CATAPPROVES
              ?
              style.massageWasChosen
              :
              style.massage
          }>
            {product.massage}
          </div>
          <div className={product.active === DISABLED ? classNames(style.title, style.titleDisabled) : style.title}>
            <input type="text" placeholder={product.title} disabled={product.active === DISABLED ? true : false} />
          </div>
          <div className={product.active === DISABLED ? classNames(style.subTitle, style.subTitleDisabled) : style.subTitle}>
            <input type="text" placeholder={product.subTitle} disabled={product.active === DISABLED ? true : false} />
          </div>
          <div className={style.servings}>
            {product.numberOfServings} порций
          </div>
          <div className={style.present}>
            {product.present}
          </div>
        </div>
        <div className={style.contentBottom}>
          <div className={product.active === DISABLED ? classNames(style.img, style.disabledImg) : style.img}></div>
          <div className={
            product.active === NOTACTIVE
              ?
              style.weight
              :
              product.active === ACTIVE ? style.weightActive : style.weightDisabled}
          >
            <p>{product.weight}</p>
            <p>кг</p>
          </div>
        </div>
      </div>
      {product.active === NOTACTIVE
        ?
        <div className={style.status}>Чего сидишь? Порадуй котэ,
          <span className={style.buy} onClick={() => createActiveArr(product.id)}> купи.</span>
        </div>
        :
        product.active === ACTIVE
          ?
          <div className={style.status}>{product.description}</div>
          :
          <div className={classNames(style.status, style.statusDisabled)}>Печалька, {product.subTitle} закончился.</div>
      }
    </div>
  );
}

export default Card;