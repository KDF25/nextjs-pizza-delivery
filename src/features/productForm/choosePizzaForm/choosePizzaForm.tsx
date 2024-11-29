'use client';

import React, { FC } from 'react';
import { Ingredient, ProductItem } from '@prisma/client';
import { cn, getPizzaDetails } from '@shared/lib';
import { Button } from '@shared/ui';
import { IngredientItem, PizzaImage, TabsProps } from '@entities/productForm';
import { usePizzaOptions } from '@shared/hooks';
import { PizzaSize, PizzaType, pizzaTypes } from '@shared/constants';
import styles from './choosePizzaForm.module.scss';

interface Props {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  // loading?: boolean;
  // onSubmit: (itemId: number, ingredients: number[]) => void;
  className?: string;
  Tabs: FC<TabsProps>;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  name,
  items,
  imageUrl,
  ingredients,
  // loading,
  // onSubmit,
  className,
  Tabs,
}) => {
  const {
    size,
    type,
    selectedIngredients,
    availableSizes,
    // currentItemId,
    setSize,
    setType,
    addIngredient,
  } = usePizzaOptions(items);

  const { totalPrice, textDetaills } = getPizzaDetails(
    type,
    size,
    items,
    ingredients,
    selectedIngredients
  );

  // const handleClickAdd = () => {
  //   if (currentItemId) {
  //     onSubmit(currentItemId, Array.from(selectedIngredients));
  //   }
  // };
  return (
    <div className={cn(className, styles.wrapper)}>
      <PizzaImage imageUrl={imageUrl} size={size} />

      <div className={styles.details}>
        <p className={styles.title}>{name}</p>
        <p className={styles.text}>{textDetaills}</p>

        <div className={styles.tabs}>
          <Tabs
            items={availableSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />
          <Tabs
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>

        <div className={`scrollbar ${styles.ingredients}`}>
          <div className={styles.ingredientGrid}>
            {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                name={ingredient.name}
                price={ingredient.price}
                imageUrl={ingredient.imageUrl}
                onClick={() => addIngredient(ingredient.id)}
                active={selectedIngredients.has(ingredient.id)}
              />
            ))}
          </div>
        </div>

        <Button className={styles.button}>
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
