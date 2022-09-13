import { ObjectID } from "typeorm";

export interface IPdfBot {
    id: ObjectID;
    unlockLevel: number;
    createdAt: Date;
    updatedAt: Date;
}