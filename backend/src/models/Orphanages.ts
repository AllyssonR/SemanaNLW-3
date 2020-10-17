import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("ophanages")
export default class Orphanages {
  @PrimaryGeneratedColumn("increment")
  id: Number;

  @Column()
  name: string;

  @Column()
  latitude: Number;

  @Column()
  longitude: number;

  @Column()
  about: string;

  @Column()
  instructions: string;

  @Column()
  opening_hours: string;

  @Column()
  open_on_weekends: boolean;
}
