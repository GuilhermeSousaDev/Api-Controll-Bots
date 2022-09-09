import { JwtPayload, sign, verify } from "jsonwebtoken";
import { auth } from "../../../../../../config/auth";
import { ICreateToken } from "../models/ICreateToken";
import { IJwtProvider } from "../models/IJwtProvider";

export default class JwtProvider implements IJwtProvider {
    generateToken({ email, name }: ICreateToken): string {
        const token = sign({ email, name }, auth.secret, {
            expiresIn: auth.expires,
        });

        return token;
    }

    verifyToken(token: string): string | JwtPayload {
        const decodedToken = verify(token, auth.secret);

        return decodedToken;
    }
}
