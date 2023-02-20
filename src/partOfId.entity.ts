import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity()
export class PartOfID {
  @ObjectIdColumn()
  _id: number;

  @Column()
  firstTwo: string;

  @Column()
  fifthEighth: number;

  @Column()
  createdAt: Date
}