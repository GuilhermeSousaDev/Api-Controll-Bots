import { JwtPayload } from "jsonwebtoken";
import { ICreateToken } from "./ICreateToken";

export interface IJwtProvider {
    generateToken({ email, name }: ICreateToken): string;
    verifyToken(token: string): string | JwtPayload;
}