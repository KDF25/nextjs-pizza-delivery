import { IStory } from '@entities/stories';
import { ApiRoutes } from './constants';
import { axiosInstance } from './instance';

export const getAll = async () => {
  const { data } = await axiosInstance.get<IStory[]>(ApiRoutes.STORIES);

  return data;
};
