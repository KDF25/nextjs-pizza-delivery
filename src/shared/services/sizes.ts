import { Size } from '@prisma/client';
import { ApiRoutes } from './constants';
import { axiosInstance } from './instance';

export const getAll = async (): Promise<Size[]> => {
  return (await axiosInstance.get<Size[]>(ApiRoutes.SIZES)).data;
};
