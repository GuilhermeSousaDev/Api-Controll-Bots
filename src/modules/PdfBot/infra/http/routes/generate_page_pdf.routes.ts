import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import GeneratePagePdfController from "../controllers/GeneratePagePdfController";

const generatePagePdfRouter = Router();
const generatePdfController = new GeneratePagePdfController();

generatePagePdfRouter.patch(
    '/',
    celebrate({
        [Segments.BODY]: {
            url: Joi.string().uri().required(),
            user_id: Joi.string().required(),
        },
    }),     
    generatePdfController.index,
);

export default generatePagePdfRouter;