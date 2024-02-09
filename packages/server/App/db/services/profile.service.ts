import { Op } from 'sequelize';
import {
  type IProfileAttributes,
  Profile,
  Jobs,
  Skills,
  Education,
  type ISkillsAttributes,
  type IEducationAttributes,
  type IJobsAttributes,
} from '../models';

type TProfileAttributesWithId = IProfileAttributes & {
  id: number;
};

class ProfileService {
  public static create = async (data: IProfileAttributes): Promise<any> =>
    Profile.create(data);

  public static update = async ({
    id,
    ...data
  }: TProfileAttributesWithId): Promise<any> =>
    Profile.update(data, {
      where: {
        id,
      },
    });

  public static getAll = async (): Promise<
    Array<
      TProfileAttributesWithId & {
        jobs: IJobsAttributes[];
        skills: ISkillsAttributes[];
        education: IEducationAttributes[];
      }
    >
  > =>
    Profile.findAll({
      include: [
        {
          model: Jobs,
        },
        {
          model: Skills,
        },
        {
          model: Education,
        },
      ],
    }).then((res) => res.map((item: any) => item.get({ plain: true })));

  public static findById = async (id: number): Promise<any> =>
    Profile.findByPk(id, {
      include: [
        {
          model: Jobs,
        },
        {
          model: Skills,
        },
        {
          model: Education,
        },
      ],
    }).then((res) => res?.get({ plain: true }));

  public static findByElemId = async (id: number): Promise<any> =>
    Profile.findOne({
      where: {
        elementId: { [Op.eq]: id },
      },
      include: [
        {
          model: Jobs,
        },
        {
          model: Skills,
        },
        {
          model: Education,
        },
      ],
    }).then((res) => res?.get({ plain: true }));

  public static deleteById = async (id: number): Promise<any> =>
    Profile.destroy({ where: { id } });
}

export default ProfileService;
