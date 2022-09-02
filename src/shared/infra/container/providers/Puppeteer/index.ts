import { container } from 'tsyringe';
import PuppeteerProvider from './implementations/PuppeteerProvider';
import { IPuppeteerProvider } from './models/IPuppeteerProvider';

container.registerSingleton<IPuppeteerProvider>(
    'puppeteerProvider',
    PuppeteerProvider
);