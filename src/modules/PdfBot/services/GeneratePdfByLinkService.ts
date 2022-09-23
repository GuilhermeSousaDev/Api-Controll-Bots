import { PDFOptions } from "puppeteer";
import { inject, injectable } from "tsyringe";
import { IBcryptProvider } from "../../../shared/infra/container/providers/BcryptProvider/models/IBcryptProvider";
import { IPuppeteerProvider } from "../../../shared/infra/container/providers/Puppeteer/models/IPuppeteerProvider";

interface IRequest {
    url: string;
    links: string[];
}

@injectable()
export default class GeneratePdfByLinkService {
    constructor(
        @inject('puppeteerProvider')
        private puppeteerProvider: IPuppeteerProvider,
        @inject('bcryptProvider')
        private bcryptProvider: IBcryptProvider,
    ) {}

    public async execute({ url, links }: IRequest): Promise<string> {
        const browser = await this.puppeteerProvider.getPuppeteerAccess();

        const page = await browser.newPage();

        await page.goto(links[0]);

        links.slice(0, 1);

        links.map(async link => {
            await Promise.all([
                page.waitForNavigation(),
                page.click(link)
            ]);
        });

        const hash = await this.bcryptProvider.generateHash(url);

        const options: PDFOptions = {
            path: `pdfs/${hash}.pdf`,
            format: 'a4',
            landscape: true,
            printBackground: true,
        }

        await page.pdf(options);

        return options.path;
    }
}