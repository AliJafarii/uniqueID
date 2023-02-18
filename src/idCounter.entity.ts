import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class IdCounter {
  @ObjectIdColumn()
  id: string;

  @Column()
  lastId: number;
}
