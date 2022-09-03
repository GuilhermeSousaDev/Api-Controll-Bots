import { Router } from 'express';
import browserSearchRouter from '../../../../modules/BrowserBot/infra/http/routes/browserSearch.routes';

const router = Router();

router.use('/browser', browserSearchRouter);

export default router;