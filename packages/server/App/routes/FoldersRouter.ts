import { Router } from 'express';
import { FoldersAPI } from '../controllers';

const FoldersRoutes = (router: Router): void => {
  const FoldersRoutes: Router = Router();

  FoldersRoutes.get('/:id', FoldersAPI.getChildsById);

  router.use('/folders', FoldersRoutes);
};

export default FoldersRoutes;
