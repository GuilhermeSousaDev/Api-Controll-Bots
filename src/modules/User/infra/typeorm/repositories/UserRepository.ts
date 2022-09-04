import { getRepository, Repository } from "typeorm";
import { ICreateUser } from "../../../domain/models/ICreateUser";
import { IUser } from "../../../domain/models/IUser";
import { IUserRepository } from "../../../domain/repositories/IUserRepository";
import User from "../entities/User";

export default class UserRepository implements IUserRepository {
    ormRepository: Repository<User>;
    
    constructor() {
        this.ormRepository = getRepository(User);
    }

    async save(user: IUser): Promise<IUser> {
        return this.ormRepository.save(user);
    }

    async create(data: ICreateUser): Promise<IUser> {
        return this.ormRepository.create(data);
    }

    async remove(user: IUser): Promise<void> {
        this.ormRepository.remove(user);
    }

    async find(): Promise<IUser[]> {
        return this.ormRepository.find();
    }

    async findById(id: string): Promise<IUser> {
        return this.ormRepository.findOne(id);
    }

    async findByEmail(email: string): Promise<IUser> {
        return this.ormRepository.findOne({
            where: {
                email,
            },
        });
    }
}