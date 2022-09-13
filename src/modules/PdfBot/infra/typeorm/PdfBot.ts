import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    ObjectID, 
    ObjectIdColumn, 
    UpdateDateColumn 
} from "typeorm";
import { IPdfBot } from "../../domain/models/IPdfBot";

@Entity('pdf_bot') 
export default class PdfBot implements IPdfBot {
    
    @ObjectIdColumn()
    id: ObjectID;
    
    @Column()
    unlockLevel: 5;

    @CreateDateColumn({ default: () => 'NOW()' })
    createdAt: Date;

    @UpdateDateColumn({ default: () => 'NOW()' })
    updatedAt: Date;
}