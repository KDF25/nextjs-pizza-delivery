import { TabsVariant } from '@entities/productForm';
import { ProductItem } from '@prisma/client';
import { pizzaSizes, PizzaType } from '@shared/constants';

export const getAvailablePizzaSizes = (
  type: PizzaType,
  items: ProductItem[]
): TabsVariant[] => {
  const filteredPizzasByType = items.filter((item) => item.pizzaType === type);

  return pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !filteredPizzasByType.some(
      (pizza) => Number(pizza.size) === Number(item.value)
    ),
  }));
};
