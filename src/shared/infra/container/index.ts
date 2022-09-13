import { container } from 'tsyringe';
import { IUserRepository } from '../../../modules/User/domain/repositories/IUserRepository';
import UserRepository from '../../../modules/User/infra/typeorm/repositories/UserRepository';

import './providers/Puppeteer';
import './providers/JwtProvider';
import './providers/BcryptProvider';
import PdfBot from '../../../modules/PdfBot/infra/typeorm/PdfBot';
import { IPdfBot } from '../../../modules/PdfBot/domain/models/IPdfBot';

container.registerSingleton<IUserRepository>(
    'userRepository',
    UserRepository,
);

container.registerSingleton<IPdfBot>('pdfBot', PdfBot);