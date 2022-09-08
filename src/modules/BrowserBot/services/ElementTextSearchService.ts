import { inject, injectable } from "tsyringe";
import { IPuppeteerProvider } from "../../../shared/infra/container/providers/Puppeteer/models/IPuppeteerProvider";
import AppError from "../../../shared/infra/errors/AppError";
import { ISearchElementText } from "../domain/models/ISearchElementText";

@injectable()
export default class ElementTextSearchService {
    constructor(
        @inject('puppeteerProvider')
        private puppeteerProvider: IPuppeteerProvider,
    ) {}

    public async execute({ url, element }: ISearchElementText): Promise<any> {
        const browser = await this.puppeteerProvider.getPuppeteerAccess();

        const page = await browser.newPage();

        await page.goto(url);
    
        try {
            await page.waitForSelector(element);

            const elementText = page.$eval(element, (el: any) => el.innerText);

            if (elementText) {
                await browser.close();
            }

            return await elementText;
        } catch (error) {
            throw new AppError('Error for return the element data');
        }
    }
}