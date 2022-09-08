import { Request, Response } from "express";
import { container } from "tsyringe";
import ElementDataSearchService from "../../../services/ElementTextSearchService";

export default class ElementDataSearchController {
    public async index(req: Request, res: Response): Promise<Response> {
        const { url, element } = req.body;

        const elementDataSearch = container.resolve(ElementDataSearchService);

        const elementData = await elementDataSearch.execute({ url, element });

        return res.json(elementData);
    }   
}