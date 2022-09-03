import { Protocol } from "puppeteer";
import { inject, injectable } from "tsyringe";
import { IPuppeteerProvider } from "../../../shared/infra/container/providers/Puppeteer/models/IPuppeteerProvider";

@injectable()
export default class BrowserSearchService {
    constructor(
        @inject('puppeteerProvider')
        private puppeteerProvider: IPuppeteerProvider,
    ) {}

    public async execute(url: string): Promise<Protocol.Network.ResourceTiming> {
        let parseUrl = url;

        const browser = await this.puppeteerProvider.getPuppeteerAccess();

        !url.includes('https') && !url.includes('http') ?
            parseUrl = `https://${url}` : url;

        const page = await browser.newPage();

        const result = (await page.goto(parseUrl)).timing();

        if (result) await browser.close();

        return result;
    }
}