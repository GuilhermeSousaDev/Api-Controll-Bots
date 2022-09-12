import { inject, injectable } from "tsyringe";
import { IBcryptProvider } from "../../../shared/infra/container/providers/BcryptProvider/models/IBcryptProvider";
import { IJwtProvider } from "../../../shared/infra/container/providers/JwtProvider/models/IJwtProvider";
import AppError from "../../../shared/infra/errors/AppError";
import { ICreateSession } from "../domain/models/ICreateSession";
import { ISession } from "../domain/models/ISession";
import { IUserRepository } from "../domain/repositories/IUserRepository";

@injectable()
export default class CreateSessionService {
    constructor(
        @inject('jwtProvider')
        private jwtProvider: IJwtProvider,
        @inject('userRepository')
        private userRepository: IUserRepository,
        @inject('bcryptProvider')
        private bcryptProvider: IBcryptProvider,
    ) {}

    public async execute({ email, password }: ICreateSession): Promise<ISession> {
        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new AppError('User not found');
        }

        const comparePassword = await this.bcryptProvider
            .compareHash(user.password, password);

        if (!comparePassword) {
            throw new AppError('Incorrect Password');
        }

        const token = this.jwtProvider.generateToken({
            email: user.email,
            name: user.name,
        });

        return {
            user,
            token
        }
    }
}