import style from './Card.module.css'
import { IProduct } from './type';

interface IProps {
  product: IProduct;
}

const Card = (props: IProps) => {
  const { product } = props
  return (
    <div>
      <div className={style.card}>
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
          <div className={style.weight}>
            <p>{product.weight}</p>
            <p>кг</p>
          </div>
        </div>
      </div>
      <div className={style.status}>Чего сидишь? Порадуй котэ, 
        <span className={style.buy}> купи.</span>
      </div>
    </div>
  );
}

export default Card;