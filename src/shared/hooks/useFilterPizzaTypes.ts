import { PizzaType } from '@prisma/client';
import { Api } from '@shared/services';
import { useEffect, useState } from 'react';

export const useFilterPizzaTypes = () => {
  const [pizzaTypes, setPizzaTypes] = useState<PizzaType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPizzaType() {
      try {
        setLoading(true);
        const pizzaTypes = await Api.pizzaTypes.getAll();
        setPizzaTypes(pizzaTypes);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchPizzaType();
  }, []);

  return {
    pizzaTypes,
    loading,
  };
};
