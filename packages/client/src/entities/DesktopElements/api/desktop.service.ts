import { AxiosInstance } from '@api';
import { type IDesktopElement } from '../model';

const endpoint = 'desktop';

export const getAllElements = async (): Promise<IDesktopElement[]> => {
  const { data } = await AxiosInstance.get<IDesktopElement[]>(endpoint);

  return data;
};
