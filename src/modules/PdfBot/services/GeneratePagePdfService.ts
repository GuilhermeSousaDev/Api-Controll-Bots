import { PDFOptions } from 'puppeteer';
import { inject, injectable } from "tsyringe";
import { IBcryptProvider } from '../../../shared/infra/container/providers/BcryptProvider/models/IBcryptProvider';
import { IPuppeteerProvider } from "../../../shared/infra/container/providers/Puppeteer/models/IPuppeteerProvider";
import AppError from "../../../shared/infra/errors/AppError";
import { IUserRepository } from "../../User/domain/repositories/IUserRepository";
import { IPdfBot } from '../domain/models/IPdfBot';

@injectable()
export default class GeneratePagePdfService {
    constructor(
        @inject('puppeteerProvider')
        private puppeteerProvider: IPuppeteerProvider,
        @inject('userRepository')
        private userRepository: IUserRepository,
        @inject('pdfBot')
        private pdfBotInfo: IPdfBot,
        @inject('bcryptProvider')
        private bcryptProvider: IBcryptProvider,
    ) {}

    public async execute(url: string, user_id: string): Promise<string> {
        const user = await this.userRepository.findById(user_id);

        if (!user) {
            throw new AppError('User not found');
        }

        if (user.accountLevel < this.pdfBotInfo.unlockLevel) {
            throw new AppError(`
                Your account level require be more than ${this.pdfBotInfo.unlockLevel}
            `);
        }

        const browser = await this.puppeteerProvider.getPuppeteerAccess();

        const page = await browser.newPage();

        await page.goto(url, { waitUntil: 'networkidle2' });

        const hash = await this.bcryptProvider.generateHash(user.id.toString());

        const options: PDFOptions = {
            path: `pdfs/${user.name}-${hash}.pdf`,
            format: 'a4',
            landscape: true,
            printBackground: true,
        }

        await page.pdf(options);

        return options.path;
    }
}