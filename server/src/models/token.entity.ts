import {
  BaseEntity, Column, Entity, ObjectID, ObjectIdColumn,
} from 'typeorm';

@Entity()
export class RefreshToken extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  value!: string;

  public revoke() {
    return this.remove();
  }
}
