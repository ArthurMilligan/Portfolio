import { Op } from 'sequelize';
import { Folders, Elements, type IFoldersAttributes } from '../models';

type TFoldersAttributesWithId = IFoldersAttributes & {
  id: number;
};

class FoldersService {
  public static create = async (data: IFoldersAttributes): Promise<any> =>
    Folders.create(data);

  public static update = async ({
    id,
    ...data
  }: TFoldersAttributesWithId): Promise<any> =>
    Folders.update(data, {
      where: {
        id,
      },
    });

  public static getAll = async (): Promise<TFoldersAttributesWithId[]> =>
    Folders.findAll();

  public static findById = async (id: number): Promise<any> =>
    Folders.findByPk(id);

  public static findAllChildsById = async (id: number): Promise<any> => {
    const elements = await Elements.findAll({
      where: {
        folderId: { [Op.eq]: id },
      },
    });
    const elementsData = elements.map((item: any) => item.get({ plain: true }));

    const folders = await Folders.findAll({
      where: { parentId: { [Op.eq]: id } },
    });
    const foldersData = folders.map((item: any) => item.get({ plain: true }));

    return [...elementsData, ...foldersData];
  };

  public static deleteById = async (id: number): Promise<any> =>
    Folders.destroy({ where: { id } });
}

export default FoldersService;
