import { injectable } from "tsyringe";
import { IPuppeteerProvider } from "../../../shared/infra/container/providers/Puppeteer/models/IPuppeteerProvider";

@injectable()
export default class ChromeSearchService {
    constructor(
        private puppeteerProvider: IPuppeteerProvider,
    ) {}

    public async execute(url: string) {
        const page = await this.puppeteerProvider.getPuppeteerAccess();

        return await page.goto(url);
    }
}