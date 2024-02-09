import { Router } from 'express';
import { ProfileAPI } from '../controllers';

const ProfileRoutes = (router: Router): void => {
  const ProfileRoutes: Router = Router();

  ProfileRoutes.get('/', ProfileAPI.get);
  ProfileRoutes.get('/:id', ProfileAPI.getByElemId);

  router.use('/profile', ProfileRoutes);
};

export default ProfileRoutes;
