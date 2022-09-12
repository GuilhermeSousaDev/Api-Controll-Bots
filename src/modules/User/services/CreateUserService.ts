import { inject, injectable } from "tsyringe";
import { IBcryptProvider } from "../../../shared/infra/container/providers/BcryptProvider/models/IBcryptProvider";
import AppError from "../../../shared/infra/errors/AppError";
import { ICreateUser } from "../domain/models/ICreateUser";
import { IUser } from "../domain/models/IUser";
import { IUserRepository } from "../domain/repositories/IUserRepository";

@injectable()
export default class CreateUserService {
    constructor(
        @inject('userRepository')
        private userRepository: IUserRepository,
        @inject('bcryptProvider')
        private bcryptProvider: IBcryptProvider,
    ) {}

    public async execute({ name, email, password }: ICreateUser): Promise<IUser> {
        const emailExists = await this.userRepository.findByEmail(email);

        if (emailExists) {
            throw new AppError('This already exists');
        }

        const user = await this.userRepository.create({
            name,
            email,
            password,
        });

        user.password = await this.bcryptProvider.generateHash(password);

        await this.userRepository.save(user);

        return user;
    }
}