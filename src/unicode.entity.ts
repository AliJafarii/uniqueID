import { Entity, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class MyCollection {
  @ObjectIdColumn()
  id: string;

  @Column()
  query: string;

  @Column()
  generatedId: string;
}
