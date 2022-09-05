import { inject, injectable } from "tsyringe";
import AppError from "../../../shared/infra/errors/AppError";
import { ILevelIncrement } from "../domain/models/ILevelIncrement";
import { IUser } from "../domain/models/IUser";
import { IUserRepository } from "../domain/repositories/IUserRepository";

@injectable()
export default class IncrementUserLevelService {
    constructor(
        @inject('userRepository')
        private userRepository: IUserRepository,
    ) {}

    public async execute({ id, xpByIncrement }: ILevelIncrement): Promise<IUser> {
        const user = await this.userRepository.findById(id);

        if (!user) {
            throw new AppError('User not found');
        }

        user.xp += xpByIncrement;

        if (user.xp >= user.nextLevelXp) {
            user.accountLevel += 1;
            user.nextLevelXp += 50;
            user.xp = 0;
        }

        await this.userRepository.save(user);

        return user;
    }
}