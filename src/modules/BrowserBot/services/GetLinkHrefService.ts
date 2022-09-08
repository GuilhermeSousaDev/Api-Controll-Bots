import { inject, injectable } from "tsyringe";
import { IPuppeteerProvider } from "../../../shared/infra/container/providers/Puppeteer/models/IPuppeteerProvider";
import { ISearchElementText } from "../domain/models/ISearchElementText";

@injectable()
export default class GetLinkHrefService {
    constructor(
        @inject('puppeteerProvider')
        private puppeteerProvider: IPuppeteerProvider,
    ) {}

    public async execute({ url, element }: ISearchElementText) {
        const browser = await this.puppeteerProvider.getPuppeteerAccess();

        const page = await browser.newPage();

        await page.goto(url);

        await page.waitForSelector(element);

        const link = await page.$eval(element, el => el.href);

        if (link) {
            await browser.close();
        }

        return link;
    }
}