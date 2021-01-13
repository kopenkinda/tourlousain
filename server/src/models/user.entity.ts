import {
  BaseEntity, Column, Entity, PrimaryGeneratedColumn,
} from 'typeorm';

export enum UserRole {
  DEFAULT,
  ADMIN
}

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  googleID: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: UserRole.DEFAULT })
  role: UserRole;
}
