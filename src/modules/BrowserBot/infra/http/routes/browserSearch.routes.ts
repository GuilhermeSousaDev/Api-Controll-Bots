import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import BrowserSearchController from '../controllers/BrowserSearchController';

const browserSearchRouter = Router();
const browserSearchController = new BrowserSearchController();

browserSearchRouter.patch(
    '/', 
    celebrate({
        [Segments.BODY]: {
            url: Joi.string().required(),
        },
    }),
    browserSearchController.index,
);

export default browserSearchRouter;