import {
    BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn,
} from 'typeorm';

import { User } from './user.entity';

export enum establishementType {
    Restaurant,
    Bar,
    Culture,
    NightClub,
    Sport,
    Découverte
}

@Entity()
export class Establishement extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    type: establishementType;

    @ManyToMany(type => User) @JoinTable()
    owner: User[];
}