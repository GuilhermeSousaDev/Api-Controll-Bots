import { compare, hash } from "bcryptjs";
import { IBcryptProvider } from "../models/IBcryptProvider";

export default class BcryptProvider implements IBcryptProvider {
    async generateHash(password: string): Promise<string> {
        const hashedPassword = await hash(password, 8);

        return hashedPassword;
    }

    async compareHash(hash: string, password: string): Promise<boolean> {
        return await compare(password, hash);
    }
}