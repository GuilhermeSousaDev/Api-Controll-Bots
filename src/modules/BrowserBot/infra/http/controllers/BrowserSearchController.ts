import { Request, Response } from "express";
import { container } from "tsyringe";
import PuppeteerProvider from "../../../../../shared/infra/container/providers/Puppeteer/implementations/PuppeteerProvider";
import ChromeSearchService from "../../../services/BrowserSearchService";

export default class ChromeSearchController {
    public async index(req: Request, res: Response): Promise<Response> {
        const { url } = req.body;

        const chromeSearch = container.resolve(ChromeSearchService);

        const result = await chromeSearch.execute(url);

        return res.json(result);
    }
}