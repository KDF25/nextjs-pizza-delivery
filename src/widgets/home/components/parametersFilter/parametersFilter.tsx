'use client';

import { CheckboxFilter, PriceFilter } from '@features/other';
import { DEFAULT_VALUES } from '@shared/config';
import {
  useFilterIngredients,
  useFilterPizzaTypes,
  useFilters,
  useFilterSizes,
  useQueryFilters,
} from '@shared/hooks';
import { FC } from 'react';
import styles from './parametersFilter.module.scss';

export const ParametersFilter: FC = () => {
  const { ingredients, loading: loadingIngridients } = useFilterIngredients();
  const itemsIngredients = ingredients.map((el) => ({
    text: el.name,
    value: String(el.id),
  }));
  const { sizes, loading: loadingSizes } = useFilterSizes();
  const itemsSizes = sizes.map((el) => ({
    text: el.name,
    value: String(el.id),
  }));
  const { pizzaTypes, loading: loadingPizzaTypes } = useFilterPizzaTypes();
  const itemsPizzaTypes = pizzaTypes.map((el) => ({
    text: el.name,
    value: String(el.id),
  }));

  const filters = useFilters();

  useQueryFilters(filters);

  console.log(filters);

  return (
    <div className={styles.wrapper}>
      <CheckboxFilter
        title="Тип теста"
        name="pizzaTypes"
        loading={loadingPizzaTypes}
        limit={DEFAULT_VALUES.pizzaTypes.limit}
        items={itemsPizzaTypes}
        onClickCheckbox={filters.setPizzaTypes}
        selected={filters.pizzaTypes}
      />
      <CheckboxFilter
        title="Размеры пиццы"
        name="sizes"
        loading={loadingSizes}
        limit={DEFAULT_VALUES.sizes.limit}
        items={itemsSizes}
        onClickCheckbox={filters.setSizes}
        selected={filters.sizes}
      />
      <PriceFilter filters={filters} />

      <CheckboxFilter
        title="Ингредиенты"
        name="ingredients"
        loading={loadingIngridients}
        limit={DEFAULT_VALUES.category.limit}
        defaultItems={itemsIngredients.slice(0, DEFAULT_VALUES.category.limit)}
        items={itemsIngredients}
        onClickCheckbox={filters.setIngredients}
        selected={filters.ingredients}
      />
    </div>
  );
};
