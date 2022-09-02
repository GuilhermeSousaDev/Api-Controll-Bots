import puppeteer from "puppeteer"
import { IPuppeteerProvider } from "../models/IPuppeteerProvider";

export default class PuppeteerProvider implements IPuppeteerProvider {
    async getPuppeteerAccess(): Promise<puppeteer.Page> {
        const browser = await puppeteer.launch({ headless: false });

        const page = await browser.newPage();

        return page;
    }
}