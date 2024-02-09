import { Op } from 'sequelize';
import { type IProjectsAttributes, Projects } from '../models';

type TProjectsAttributesWithId = IProjectsAttributes & {
  id: number;
};

class ProjectsService {
  public static create = async (data: IProjectsAttributes): Promise<any> =>
    Projects.create(data);

  public static update = async ({
    id,
    ...data
  }: TProjectsAttributesWithId): Promise<any> =>
    Projects.update(data, {
      where: {
        id,
      },
    });

  public static getAll = async (): Promise<TProjectsAttributesWithId[]> =>
    Projects.findAll({}).then((res) =>
      res.map((item: any) => item.get({ plain: true })),
    );

  public static findById = async (id: number): Promise<any> =>
    Projects.findByPk(id, {}).then((res) => res?.get({ plain: true }));

  public static findByElemId = async (id: number): Promise<any> =>
    Projects.findOne({
      where: {
        elementId: { [Op.eq]: id },
      },
    }).then((res) => res?.get({ plain: true }));

  public static deleteById = async (id: number): Promise<any> =>
    Projects.destroy({ where: { id } });
}

export default ProjectsService;
