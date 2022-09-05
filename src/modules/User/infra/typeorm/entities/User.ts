import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    ObjectID, 
    ObjectIdColumn, 
    UpdateDateColumn,
} from "typeorm";
import { IUser } from "../../../domain/models/IUser";

@Entity('users')
export default class User implements IUser {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column({ select: false })
    password: string;

    @Column({ default: 1 })
    accountLevel: number;

    @Column({ default: 50 })
    nextLevelXp: number;

    @Column({ default: 0 })
    xp: number;

    @Column({ default: ['browserBot'] })
    bots: string[];

    @CreateDateColumn({ default: () => 'NOW()' })
    createdAt: Date;

    @UpdateDateColumn({ default: () => 'NOW()' })
    updatedAt: Date;
}