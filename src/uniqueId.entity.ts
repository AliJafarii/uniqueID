import { Entity, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class UniqueID {
  @ObjectIdColumn()
  _id: number;

  @Column()
  query: string;

  @Column()
  generatedId: string;

  @Column()
  createdAt: Date;
}