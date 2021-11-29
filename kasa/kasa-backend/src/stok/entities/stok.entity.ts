import { OrderBaseEntity } from "src/base/base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Stok extends OrderBaseEntity  {
  @PrimaryGeneratedColumn()
  id : number;

  @Column()
  name : string;

  @Column()
  stok_type:string;


  @Column()
  stok_group:string;

  @Column({default : 1})
  status: number;

  @Column({default: 0})
  order: number;
}
