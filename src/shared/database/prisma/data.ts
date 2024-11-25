import { UserRole } from '@prisma/client';
import { hashSync } from 'bcrypt';
import { _ingredients } from './constants';

export const USER_DATA = [
  {
    fullName: 'User Test',
    email: 'user@test.ru',
    password: hashSync('111111', 10),
    verified: new Date(),
    role: UserRole.USER,
  },
  {
    fullName: 'Admin Admin',
    email: 'admin@test.ru',
    password: hashSync('111111', 10),
    verified: new Date(),
    role: UserRole.ADMIN,
  },
];

export const PIZZA_1 = {
  name: 'Пепперони фреш',
  imageUrl:
    'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp',
  categoryId: 1,
  ingredients: {
    connect: _ingredients.slice(0, 5),
  },
};

export const PIZZA_2 = {
  name: 'Сырная',
  imageUrl:
    'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp',
  categoryId: 1,
  ingredients: {
    connect: _ingredients.slice(5, 10),
  },
};

export const PIZZA_3 = {
  name: 'Чоризо фреш',
  imageUrl:
    'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp',
  categoryId: 1,
  ingredients: {
    connect: _ingredients.slice(10, 40),
  },
};

export const CART = [
  {
    userId: 1,
    totalAmount: 0,
    token: '11111',
  },
  {
    userId: 2,
    totalAmount: 0,
    token: '222222',
  },
];

export const CART_ITEM = {
  productItemId: 1,
  cartId: 1,
  quantity: 2,
  ingredients: {
    connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
  },
};

export const STORY = [
  {
    previewImageUrl:
      'https://cdn.inappstory.ru/story/xep/xzh/zmc/cr4gcw0aselwvf628pbmj3j/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=3101815496',
  },
  {
    previewImageUrl:
      'https://cdn.inappstory.ru/story/km2/9gf/jrn/sb7ls1yj9fe5bwvuwgym73e/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=3074015640',
  },
  {
    previewImageUrl:
      'https://cdn.inappstory.ru/story/quw/acz/zf5/zu37vankpngyccqvgzbohj1/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=1336215020',
  },
  {
    previewImageUrl:
      'https://cdn.inappstory.ru/story/7oc/5nf/ipn/oznceu2ywv82tdlnpwriyrq/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=38903958',
  },
  {
    previewImageUrl:
      'https://cdn.inappstory.ru/story/q0t/flg/0ph/xt67uw7kgqe9bag7spwkkyw/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=2941222737',
  },
  {
    previewImageUrl:
      'https://cdn.inappstory.ru/story/lza/rsp/2gc/xrar8zdspl4saq4uajmso38/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=4207486284',
  },
];

export const STORY_ITEM = [
  {
    storyId: 1,
    sourceUrl:
      'https://cdn.inappstory.ru/file/dd/yj/sx/oqx9feuljibke3mknab7ilb35t.webp?k=IgAAAAAAAAAE',
  },
  {
    storyId: 1,
    sourceUrl:
      'https://cdn.inappstory.ru/file/jv/sb/fh/io7c5zarojdm7eus0trn7czdet.webp?k=IgAAAAAAAAAE',
  },
  {
    storyId: 1,
    sourceUrl:
      'https://cdn.inappstory.ru/file/ts/p9/vq/zktyxdxnjqbzufonxd8ffk44cb.webp?k=IgAAAAAAAAAE',
  },
  {
    storyId: 1,
    sourceUrl:
      'https://cdn.inappstory.ru/file/ur/uq/le/9ufzwtpdjeekidqq04alfnxvu2.webp?k=IgAAAAAAAAAE',
  },
  {
    storyId: 1,
    sourceUrl:
      'https://cdn.inappstory.ru/file/sy/vl/c7/uyqzmdojadcbw7o0a35ojxlcul.webp?k=IgAAAAAAAAAE',
  },
];
