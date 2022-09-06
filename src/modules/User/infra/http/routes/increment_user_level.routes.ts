import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import IncrementUserLevelController from '../controllers/IncrementUserLevelController';

const incrementUserLevelRouter = Router();
const incrementUserLevelController = new IncrementUserLevelController();

incrementUserLevelRouter.post(
    '/', 
    celebrate({
        [Segments.BODY]: {
            id: Joi.string().required(),
            xpByIncrement: Joi.number().required(),
        }
    }),
    incrementUserLevelController.index,
);

export default incrementUserLevelRouter;