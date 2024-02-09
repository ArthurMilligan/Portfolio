import { Router } from 'express';
import { DesktopAPI } from '../controllers';

const DesktopRoutes = (router: Router): void => {
  const DesktopRoutes: Router = Router();

  DesktopRoutes.get('/', DesktopAPI.getAll);

  router.use('/desktop', DesktopRoutes);
};

export default DesktopRoutes;
