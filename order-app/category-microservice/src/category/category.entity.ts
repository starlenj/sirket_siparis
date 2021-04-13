import { IsNotEmpty, IsString } from "class-validator";
import { BaseEntity, Column, CreateDateColumn, Entity, ObjectIdColumn, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Category {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Column({default : 0})
  order: number;
  
  @Column({default : "Product"})
  category_type:string;
  
  @Column({default :true})
  status: boolean;
  
  @CreateDateColumn() createdAt :Date;
  @UpdateDateColumn() updatedAt :Date;

}
