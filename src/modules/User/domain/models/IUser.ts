import { ObjectID } from "typeorm";

export interface IUser {
    id: ObjectID;
    name: string;
    email: string;
    password: string;
    accountLevel: number;
    bots: string[];
    createdAt: Date;
    updatedAt: Date;
}