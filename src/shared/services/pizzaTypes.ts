import { PizzaType } from '@prisma/client';
import { ApiRoutes } from './constants';
import { axiosInstance } from './instance';

export const getAll = async (): Promise<PizzaType[]> => {
  return (await axiosInstance.get<PizzaType[]>(ApiRoutes.PIZZA_TYPES)).data;
};
