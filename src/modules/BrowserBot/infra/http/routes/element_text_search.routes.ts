import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import ElementDataSearchController from "../controllers/ElementTextSearchController";

const elementDataSearchRouter = Router();
const elementDataSearchController = new ElementDataSearchController();

elementDataSearchRouter.patch(
    '/',
    celebrate({
        [Segments.BODY]: {
            url: Joi.string().required(),
            element: Joi.string().required(),
        },
    }),
    elementDataSearchController.index,
);

export default elementDataSearchRouter;