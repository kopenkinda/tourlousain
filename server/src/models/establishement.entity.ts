import {
  BaseEntity, Column, Entity, JoinTable, ManyToMany, ObjectID, ObjectIdColumn,
} from 'typeorm';

import { User } from './user.entity';

export enum establishementType {
  Restaurant,
  Bar,
  Culture,
  NightClub,
  Sport,
  Decouverte,
}

@Entity()
export class Establishement extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  type: establishementType;

  @ManyToMany((type) => User) @JoinTable()
  owner: User[];
}
