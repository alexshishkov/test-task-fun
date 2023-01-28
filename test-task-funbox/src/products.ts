import { IProduct } from './components/Card/type';

const products: IProduct[] = [
  {
    id: 0,
    massage: 'Сказочное заморское яство',
    title: 'Нямушка',
    subTitle: 'с фуа-гра',
    numberOfServings: '10',
    present: 'мышь в подарок',
    weight: 0.5,
    description: 'Печень утки разварная с артишоками.',
    wasChosen: false,
    active: 'not active',
  },
  {
    id: 1,
    massage: 'Сказочное заморское яство',
    title: 'Нямушка',
    subTitle: 'с рыбой',
    numberOfServings: '40',
    present: '2 мыши в подарок',
    weight: 2,
    description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    wasChosen: false,
    active: 'not active',
  },
  {
    id: 2,
    massage: 'Сказочное заморское яство',
    title: 'Нямушка',
    subTitle: 'с курой',
    numberOfServings: '100',
    present: '5 мышей в подарок заказчик доволен',
    weight: 5,
    description: 'Филе из цыплят с трюфелями в бульоне.',
    wasChosen: false,
    active: 'not active',
  },
];

export default products;
