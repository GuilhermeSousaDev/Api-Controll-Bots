import { Request, Response } from "express";
import { container } from "tsyringe";
import GeneratePagePdfService from "../../../services/GeneratePagePdfService";

export default class GeneratePagePdfController {
    public async index(req: Request, res: Response): Promise<Response> {
        const { url, user_id } = req.body;

        const generatePagePdf = container.resolve(GeneratePagePdfService);

        const pdf = await generatePagePdf.execute(url, user_id);

        return res.json(pdf);
    }
}