import puppeteer from 'puppeteer';

export interface IPuppeteerProvider {
    getPuppeteerAccess(): Promise<puppeteer.Page>;
}