import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Post } from '@dom/post/post.entity';
import { Chrono } from '@dom/chrono/chrono.entity';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Driver {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column({nullable: true})
    public image?: string;

    @Column()
    public name: string;

    @Column({nullable: true})
    public alias?: string;

    @Column({ unique: true })
    public email: string;

    @OneToMany(() => Post, post => post.pilot)
    public posts: Post[];

    @OneToMany(() => Chrono, chrono => chrono.pilot)
    public times: Chrono[];

    
    constructor(name: string, email: string, alias?: string, image ?: string){
        this.id = uuidv4();
        this.name = name;
        this.email = email;
        this.alias = alias;
        this.image = image;

    }

}