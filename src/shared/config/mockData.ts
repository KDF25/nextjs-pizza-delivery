import { IProductCard } from '@entities/home';

export const SIZES = [
  {
    text: '20 см',
    value: '20',
  },
  {
    text: '30 см',
    value: '30',
  },
  {
    text: '40 см',
    value: '40',
  },
];

export const PIZZATYPES = [
  {
    text: 'Тонкое',
    value: '1',
  },
  {
    text: 'Традиционное',
    value: '2',
  },
];

export const INGRIDIENTS = [
  {
    text: 'Сырный соус',
    value: '1',
  },
  {
    text: 'Моцаррела',
    value: '2',
  },
  {
    text: 'Чеснок',
    value: '3',
  },
  {
    text: 'Соленые огурчики',
    value: '4',
  },
  {
    text: 'Красный лук',
    value: '5',
  },
  {
    text: 'Томаты',
    value: '6',
  },
  {
    text: 'Красный лук',
    value: '5',
  },
  {
    text: 'Томаты',
    value: '6',
  },
];

export const CATEGORIES = [
  { id: 1, name: 'Пиццы' },
  { id: 2, name: 'Комбо' },
  { id: 3, name: 'Закуски' },
  { id: 4, name: 'Десерты' },
  { id: 5, name: 'Напитки' },
  { id: 6, name: 'Соусы' },
  { id: 7, name: 'Салаты' },
  { id: 8, name: 'Акции' },
];

export const pizza: IProductCard[] = [
  {
    id: 1,
    name: 'Маргарита',
    ingridients: 'Томатный соус, сыр моцарелла, базилик',
    imageUrl:
      'https://media.dodostatic.net/image/r:584x584/11EED73C6B01E9ECAB89410716435740.avif',
  },
  {
    id: 2,
    name: 'Пепперони',
    ingridients: 'Томатный соус, сыр моцарелла, пепперони',
    imageUrl:
      'https://media.dodostatic.net/image/r:584x584/11EED73C6B01E9ECAB89410716435740.avif',
  },
  {
    id: 3,
    name: 'Четыре сыра',
    ingridients:
      'Сливочный соус, сыр моцарелла, горгонзола, пармезан, эмменталь',
    imageUrl:
      'https://media.dodostatic.net/image/r:584x584/11EED73C6B01E9ECAB89410716435740.avif',
  },
  {
    id: 4,
    name: 'Гавайская',
    ingridients: 'Томатный соус, сыр моцарелла, курица, ананас',
    imageUrl:
      'https://media.dodostatic.net/image/r:584x584/11EED73C6B01E9ECAB89410716435740.avif',
  },
  {
    id: 5,
    name: 'Мясная',
    ingridients: 'Томатный соус, сыр моцарелла, ветчина, пепперони, бекон',
    imageUrl:
      'https://media.dodostatic.net/image/r:584x584/11EED73C6B01E9ECAB89410716435740.avif',
  },
];
