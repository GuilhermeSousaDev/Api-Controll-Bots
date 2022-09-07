import { Router } from 'express';
import browserSearchRouter from '../../../../modules/BrowserBot/infra/http/routes/browserSearch.routes';
import elementDataSearchRouter from '../../../../modules/BrowserBot/infra/http/routes/element_data_search.routes';
import incrementUserLevelRouter from '../../../../modules/User/infra/http/routes/increment_user_level.routes';
import userRouter from '../../../../modules/User/infra/http/routes/user.routes';

const router = Router();

router.use('/user', userRouter);
router.use('/user/level', incrementUserLevelRouter);

router.use('/browser', browserSearchRouter);
router.use('/browser/element', elementDataSearchRouter);

export default router;