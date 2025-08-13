import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Chrono } from '@dom/chrono/chrono.entity';

@Entity()
export class Session {
    @PrimaryGeneratedColumn('uuid')
    private id: string;

    @Column()
    private name: string;

    @OneToMany(() => Chrono, chrono => chrono.session)
    public chronos: Chrono[];
}