import puppeteer, { Browser } from "puppeteer"
import { IPuppeteerProvider } from "../models/IPuppeteerProvider";

export default class PuppeteerProvider implements IPuppeteerProvider {
    async getPuppeteerAccess(): Promise<Browser> {
        return await puppeteer.launch({ headless: false });
    }
}