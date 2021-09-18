import { IsEmail, IsNotEmpty, isPhoneNumber, IsString } from "class-validator";
import { BaseEntity, Column, CreateDateColumn, Entity, ObjectIdColumn, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class OptionHeader {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  name: string;
  
  @Column()
  @IsNotEmpty()
  category: number;
  
  @Column()
  @IsNotEmpty()
  @IsString()
  option_type: string;

  @Column({default :false})
  is_required: boolean;
  
  @Column({default : 0})
  order: number;
 
  @Column({default :true})
  status: boolean;
  
  @CreateDateColumn() createdAt :Date;
  @UpdateDateColumn() updatedAt :Date;

}
