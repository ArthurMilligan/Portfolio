import { AxiosInstance } from '@api';
import { type IProject, type IFolder, type IProfile } from '../model';

const profileEndpoint = 'profile';
const folderEndpoint = 'folders';
const projectEndpoint = 'projects';

export const getProfileByElemId = async (id: number): Promise<IProfile> => {
  const { data } = await AxiosInstance.get<IProfile>(
    `${profileEndpoint}/${id}`,
  );

  return data;
};

export const getProjectByElemId = async (id: number): Promise<IProject> => {
  const { data } = await AxiosInstance.get<IProject>(
    `${projectEndpoint}/${id}`,
  );

  return data;
};

export const getFolderItemsByParentId = async (
  id: number,
): Promise<IFolder> => {
  const { data } = await AxiosInstance.get<IFolder>(`${folderEndpoint}/${id}`);

  return data;
};
