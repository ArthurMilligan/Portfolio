import { Router } from 'express';
import { ProjectsAPI } from '../controllers';

const ProjectsRoutes = (router: Router): void => {
  const ProjectsRoutes: Router = Router();

  ProjectsRoutes.get('/:id', ProjectsAPI.getByElemId);

  router.use('/projects', ProjectsRoutes);
};

export default ProjectsRoutes;
