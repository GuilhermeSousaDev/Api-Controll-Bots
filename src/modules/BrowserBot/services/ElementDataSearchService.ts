import { inject, injectable } from "tsyringe";
import { IPuppeteerProvider } from "../../../shared/infra/container/providers/Puppeteer/models/IPuppeteerProvider";
import AppError from "../../../shared/infra/errors/AppError";
import { ISearchElementData } from "../domain/models/ISearchElementData";

@injectable()
export default class ElementDataSearchService {
    constructor(
        @inject('puppeteerProvider')
        private puppeteerProvider: IPuppeteerProvider,
    ) {}

    public async execute({ url, element }: ISearchElementData) {
        const browser = await this.puppeteerProvider.getPuppeteerAccess();

        const page = await browser.newPage();

        await page.goto(url);
    
        try {
            await page.waitForSelector(element);

            return await page.$eval(element, el => el);
        } catch (error) {
            throw new AppError('Error for return the element data');
        }
    }
}