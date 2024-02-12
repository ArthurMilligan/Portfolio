import type { Request, Response } from 'express';
import { ProfileService } from '../db/services';

class ProfileAPI {
  public static get = async (
    _request: Request,
    response: Response,
  ): Promise<any> => {
    try {
      const profiles = await ProfileService.getAll();
      const res = profiles.map(
        ({
          name,
          avatar,
          age,
          about,
          mail,
          gitHub,
          telegram,
          proffesion,
          keySkills,
          achievements,
          hobbys,
          skills,
          education,
        }) => ({
          name,
          avatar,
          about,
          age,
          mail,
          gitHub,
          telegram,
          proffesion,
          keySkills,
          achievements,
          hobbys,
          softSkills: skills.filter(({ type }) => type === 'soft'),
          hardSkills: skills.filter(({ type }) => type === 'hard'),
          education: education.filter(({ type }) => type === '0'),
          additionalEducation: education.filter(({ type }) => type === '1'),
        }),
      );

      return response.status(200).json(res);
    } catch (error) {
      console.info(error);

      return response.status(400).send(error);
    }
  };

  public static getByElemId = async (
    request: Request,
    response: Response,
  ): Promise<any> => {
    try {
      const { id } = request.params;
      const profile = await ProfileService.findByElemId(+id);
      const {
        name,
        avatar,
        age,
        about,
        mail,
        mailUrl,
        gitHub,
        gitHubUrl,
        telegram,
        telegramUrl,
        proffesion,
        keySkills,
        achievements,
        hobbys,
        skills,
        education,
        jobs,
      } = profile;
      const res = {
        name,
        avatar,
        about,
        age,
        mail: {
          name: mail,
          url: mailUrl,
        },
        gitHub: {
          name: gitHub,
          url: gitHubUrl,
        },
        telegram: {
          name: telegram,
          url: telegramUrl,
        },
        proffesion,
        keySkills,
        achievements,
        hobbys,
        softSkills: skills.filter(({ type }: any) => type === 'soft'),
        hardSkills: skills.filter(({ type }: any) => type === 'hard'),
        education: education.filter(({ type }: any) => type === '0'),
        additionalEducation: education.filter(({ type }: any) => type === '1'),
        experience: [...jobs],
      };

      console.log(res);

      return response.status(200).json(res);
    } catch (error) {
      console.info(error);

      return response.status(400).send(error);
    }
  };
}

export default ProfileAPI;
