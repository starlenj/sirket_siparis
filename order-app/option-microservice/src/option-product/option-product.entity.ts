import { BaseEntity, Column, CreateDateColumn, Entity, ObjectIdColumn, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class OptionProduct {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column() 
  product_id: number;

  @Column() 
  option_header_id: number;
 
  @Column({default :true})
  status: boolean;
  
  @CreateDateColumn() createdAt :Date;
  @UpdateDateColumn() updatedAt :Date;

}
