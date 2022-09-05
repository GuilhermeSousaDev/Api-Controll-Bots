import { container } from 'tsyringe';
import { IUserRepository } from '../../../modules/User/domain/repositories/IUserRepository';
import UserRepository from '../../../modules/User/infra/typeorm/repositories/UserRepository';

import './providers/Puppeteer';

container.registerSingleton<IUserRepository>(
    'userRepository',
    UserRepository,
);