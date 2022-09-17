import { compare, hash } from "bcryptjs";
import { IBcryptProvider } from "../models/IBcryptProvider";

export default class BcryptProvider implements IBcryptProvider {
    async generateHash(payload: string): Promise<string> {
        const hashedPassword = await hash(payload, 8);

        return hashedPassword;
    }

    async compareHash(hash: string, payload: string): Promise<boolean> {
        return await compare(payload, hash);
    }
}