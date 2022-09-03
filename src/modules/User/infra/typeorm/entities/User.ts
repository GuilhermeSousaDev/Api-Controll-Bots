import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    ObjectID, 
    ObjectIdColumn, 
    UpdateDateColumn,
} from "typeorm";

@Entity('users')
export default class User {
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

    @Column({ default: ['browserBot'] })
    bots: string[];

    @CreateDateColumn({ default: () => 'NOW()' })
    createdAt: Date;

    @UpdateDateColumn({ default: () => 'NOW()' })
    updatedAt: Date;
}