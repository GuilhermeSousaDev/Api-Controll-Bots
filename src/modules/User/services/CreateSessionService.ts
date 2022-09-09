import { inject, injectable } from "tsyringe";
import { IJwtProvider } from "../../../shared/infra/container/providers/JwtProvider/models/IJwtProvider";
import { ISession } from "../domain/models/ISession";

@injectable()
export default class CreateSessionService {
    constructor(
        @inject('jwtProvider')
        private jwtProvider: IJwtProvider,
    ) {}

    public async execute({ email, password }: ISession) {

    }
}