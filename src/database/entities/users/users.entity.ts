import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Timestamps } from "../inheritance";

@Entity('user_progipix')
export class UsersCars extends Timestamps {

    @PrimaryGeneratedColumn('uuid')
    userId: string;

    @Column()
    names: string;

    @Column()
    lastnames: string;

    @Column({ type: 'bigint' })
    phone: number;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    photos: string

    @Column({ nullable: true })
    state: boolean;

}