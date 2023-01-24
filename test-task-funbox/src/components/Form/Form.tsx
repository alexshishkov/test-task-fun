import { Dispatch, SetStateAction, useState } from 'react';
import { Link } from 'react-router-dom';
import { IProduct } from '../Card/type';
import style from './Form.module.css';

interface IProps {
  products: IProduct[];
  setProducts: Dispatch<SetStateAction<IProduct[]>>;
  activeArr: number[];
}

const Form = (props: IProps) => {
  const { products, setProducts, activeArr } = props;
  const index = activeArr[0];
  const [name, setName] = useState('');
  const [taste, setTaste] = useState('');
  const [number, setNumber] = useState('');
  const newCard = () => {
    if(name !== '') {
      products[index].title = name
    }
    if(taste !== '') {
      products[index].subTitle = taste
    }
    if(number !== '') {
      products[index].numberOfServings = number
    } 
    setProducts(products)
  }
  return (
    <div className={style.wrapper}>
      <input value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Название' type="text" />
      <input value={taste} onChange={(e)=>{setTaste(e.target.value)}} placeholder='Вкус' type="text" />
      <span>Количество <input value={number} onChange={(e)=>{setNumber(e.target.value)}} className={style.number} type={'number'} />шт.</span>
      <div onClick={newCard}><Link className={style.send} to="/">Отправить</Link></div>
    </div>
  );
}

export default Form;
