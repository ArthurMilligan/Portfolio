import { type WithId } from '../../utils';
import { type IElementsAttributes } from '../models/elements/model';
import {
  Desktop,
  Elements,
  Folders,
  type IFoldersAttributes,
  type IDesktopAttributes,
} from '../models';

type TDesktopAttributesWithId = IDesktopAttributes & {
  id: number;
};

class DesktopService {
  public static create = async (data: IDesktopAttributes): Promise<any> =>
    Desktop.create(data);

  public static update = async ({
    id,
    ...data
  }: TDesktopAttributesWithId): Promise<any> =>
    Desktop.update(data, {
      where: {
        id,
      },
    });

  public static getAll = async (): Promise<
    Array<
      TDesktopAttributesWithId & {
        Folders: Array<WithId<IFoldersAttributes>>;
        Elements: Array<WithId<IElementsAttributes>>;
      }
    >
  > =>
    Desktop.findAll({
      include: [Folders, Elements],
    }).then((res) => res.map((item: any) => item.get({ plain: true })));

  public static findById = async (id: number): Promise<any> =>
    Desktop.findByPk(id);

  public static deleteById = async (id: number): Promise<any> =>
    Desktop.destroy({ where: { id } });
}

export default DesktopService;
