import { inject, injectable } from "tsyringe";
import { IPuppeteerProvider } from "../../../shared/infra/container/providers/Puppeteer/models/IPuppeteerProvider";

@injectable()
export default class CreateFuncionalityBotService {
    constructor(
        @inject('puppeteerProvider')
        private puppeteerProvider: IPuppeteerProvider,
    ) {}

    public async execute(funcionality: string): Promise<unknown> {
        const browser = await this.puppeteerProvider.getPuppeteerAccess();

        const page = await browser.newPage();

        const bodyHandle = await page.$('body');

        const res = await page.evaluate(funcionality, bodyHandle);

        return res;
    }
}