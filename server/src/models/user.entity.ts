import {
  BaseEntity, Column, Entity, ObjectID, ObjectIdColumn,
} from 'typeorm';

export enum UserRole {
  ADMIN,
  USER,
  PROFESSIONNAL,
}

@Entity()
export class User extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  googleID: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: UserRole.USER })
  role: UserRole;

  @Column()
  sharedImages: any[];

  @Column()
  description: string;

  @Column({ default: Date.now() })
  signUpDate: Date;
}
