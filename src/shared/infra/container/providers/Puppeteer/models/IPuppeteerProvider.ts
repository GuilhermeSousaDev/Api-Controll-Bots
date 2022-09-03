import puppeteer, { Browser } from 'puppeteer';

export interface IPuppeteerProvider {
    getPuppeteerAccess(): Promise<Browser>;
}