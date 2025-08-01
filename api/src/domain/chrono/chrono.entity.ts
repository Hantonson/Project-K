
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Driver } from '@dom/driver/driver.entity';
import { Session } from '@dom/session/session.entity';

@Entity()
export class Chrono {
    @PrimaryGeneratedColumn('uuid')
    private id: string;

    @Column()
    private time: number;

    @ManyToOne(() => Session, session => session.chronos)
    public session: Session;

    @ManyToOne(() => Driver, pilot => pilot.times)
    public pilot: Driver;
}