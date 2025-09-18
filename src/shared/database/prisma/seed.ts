import { prisma } from './client';
import {
  _ingredients,
  categories,
  pizzaTypes,
  products,
  sizes,
} from './constants';
import {
  CART,
  CART_ITEM,
  PIZZA_1,
  PIZZA_2,
  PIZZA_3,
  STORY,
  STORY_ITEM,
  USER_DATA,
} from './data';
import { generateProductItem } from './functions';

async function up() {
  await prisma.user.createMany({
    data: USER_DATA,
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.ingredient.createMany({
    data: _ingredients,
  });

  await prisma.size.createMany({
    data: sizes,
  });

  await prisma.pizzaType.createMany({
    data: pizzaTypes,
  });

  await prisma.product.createMany({
    data: products,
  });

  const pizza1 = await prisma.product.create({
    data: PIZZA_1,
  });

  const pizza2 = await prisma.product.create({
    data: PIZZA_2,
  });

  const pizza3 = await prisma.product.create({
    data: PIZZA_3,
  });

  const productData = Array.from({ length: products.length }, (_, index) =>
    generateProductItem({ productId: index + 1 })
  );

  await prisma.productItem.createMany({
    data: [
      // Пицца "Пепперони фреш"
      generateProductItem({ productId: pizza1.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 40 }),

      // Пицца "Сырная"
      generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 40 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 20 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 40 }),

      // Пицца "Чоризо фреш"
      generateProductItem({ productId: pizza3.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 40 }),

      // Остальные продукты

      ...productData,
    ],
  });

  await prisma.cart.createMany({
    data: CART,
  });

  await prisma.cartItem.create({
    data: CART_ITEM,
  });

  await prisma.story.createMany({
    data: STORY,
  });

  await prisma.storyItem.createMany({
    data: STORY_ITEM,
  });
}
async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "PizzaType" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Size" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Story" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "StoryItem" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    console.log('Start seed | down');
    await down();
    console.log('Start seed | up');
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
