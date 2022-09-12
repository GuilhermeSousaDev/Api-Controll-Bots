import { Router } from 'express';
import browserSearchRouter from '../../../../modules/BrowserBot/infra/http/routes/browserSearch.routes';
import elementTextSearchRouter from '../../../../modules/BrowserBot/infra/http/routes/element_text_search.routes';
import incrementUserLevelRouter from '../../../../modules/User/infra/http/routes/increment_user_level.routes';
import sessionRouter from '../../../../modules/User/infra/http/routes/session.routes';
import userRouter from '../../../../modules/User/infra/http/routes/user.routes';

const router = Router();

router.use('/user', userRouter);
router.use('/user/level', incrementUserLevelRouter);

router.use('/browser', browserSearchRouter);
router.use('/browser/element', elementTextSearchRouter);

router.use('/session', sessionRouter);

export default router;