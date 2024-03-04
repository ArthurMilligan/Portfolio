import type { Request, Response } from 'express';
import { ProjectsService } from '../db/services';

class ProjectsAPI {
  public static getByElemId = async (
    request: Request,
    response: Response,
  ): Promise<any> => {
    try {
      const { id } = request.params;
      const project = await ProjectsService.findByElemId(+id);

      console.log(project);

      return response.status(200).json(project);
    } catch (error) {
      console.info(error);

      return response.status(400).send(error);
    }
  };
}

export default ProjectsAPI;
