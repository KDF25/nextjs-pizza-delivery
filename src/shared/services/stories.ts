import { IStory } from '@entities/stories';
import { axiosInstance } from './instance';

export const getAll = async () => {
  const { data } = await axiosInstance.get<IStory[]>('/stories');

  return data;
};
