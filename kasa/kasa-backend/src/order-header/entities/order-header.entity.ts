import { OrderBaseEntity } from "src/base/base.entity";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OrderHeader extends OrderBaseEntity  {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sube_id: number;

  @Column({default: 1})
  status: number;

}
