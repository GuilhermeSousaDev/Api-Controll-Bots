import fs from 'fs';
import { promisify } from 'util';
import AppError from '../../../shared/infra/errors/AppError';

export default class RemovePdfFileService {
    public async execute(filename: string): Promise<void> {
        const existsAsync = promisify(fs.exists);
        const unlinkAsync = promisify(fs.unlink);

        const path = `pdfs/${filename}`;

        const pathExists = await existsAsync(path);

        if (!pathExists) {
            throw new AppError('Path not found');
        }

        await unlinkAsync(path);
    }
}