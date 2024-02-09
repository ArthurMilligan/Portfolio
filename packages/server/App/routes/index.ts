import { Router } from 'express';
import ProfileRoutes from './ProfileRouter';
import DesktopRoutes from './DesktopRouter';
import FoldersRoutes from './FoldersRouter';
import ProjectsRoutes from './ProjectsRouter';

const router: Router = Router();

ProjectsRoutes(router);
FoldersRoutes(router);
ProfileRoutes(router);
DesktopRoutes(router);

export default router;
