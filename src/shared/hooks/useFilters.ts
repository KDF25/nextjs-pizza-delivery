import { productData } from '@entities/home';
import { useSearchParams } from 'next/navigation';
import { useMemo, useState } from 'react';
import { useSet } from 'react-use';

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

interface QueryFilters extends PriceProps {
  pizzaTypes: string;
  sizes: string;
  ingredients: string;
}

export interface Filters {
  sizes: Set<string>;
  pizzaTypes: Set<string>;
  ingredients: Set<string>;
  prices: PriceProps;
}

export interface ReturnProps extends Filters {
  setPrices: (name: keyof PriceProps, value: number) => void;
  setPizzaTypes: (value: string) => void;
  setSizes: (value: string) => void;
  setIngredients: (value: string) => void;
}

export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams() as unknown as Map<
    keyof QueryFilters,
    string
  >;

  const [ingredients, { toggle: toggleIngredients }] = useSet(
    new Set<string>(searchParams.get(productData.ingredients)?.split(','))
  );

  const [sizes, { toggle: toggleSizes }] = useSet(
    new Set<string>(
      searchParams.has(productData.sizes)
        ? searchParams.get(productData.sizes)?.split(',')
        : []
    )
  );

  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
    new Set<string>(
      searchParams.has(productData.pizzaTypes)
        ? searchParams.get(productData.pizzaTypes)?.split(',')
        : []
    )
  );

  const [prices, setPrices] = useState<PriceProps>({
    priceFrom: Number(searchParams.get(productData.priceFrom)) || undefined,
    priceTo: Number(searchParams.get(productData.priceTo)) || undefined,
  });

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrices((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return useMemo(
    () => ({
      sizes,
      pizzaTypes,
      ingredients,
      prices,
      setPrices: updatePrice,
      setPizzaTypes: togglePizzaTypes,
      setSizes: toggleSizes,
      setIngredients: toggleIngredients,
    }),
    [
      sizes,
      pizzaTypes,
      ingredients,
      prices,
      toggleIngredients,
      togglePizzaTypes,
      toggleSizes,
    ]
  );
};
