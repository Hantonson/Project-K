import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Driver } from '@dom/driver/driver.entity';


@Entity()
export class Post {
    @PrimaryGeneratedColumn('uuid')
    private id: string;

    @Column()
    private title: string;

    @Column()
    private content: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    private createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    private updatedAt: Date;


    @ManyToOne(() => Driver, pilot => pilot.posts)
    public pilot: Driver;
}