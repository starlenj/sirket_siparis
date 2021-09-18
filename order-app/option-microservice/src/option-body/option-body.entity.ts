import { IsEmail, IsNotEmpty, isPhoneNumber, IsString } from "class-validator";
import { BaseEntity, Column, CreateDateColumn, Entity, ObjectIdColumn, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class OptionBody {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  name: string;
  
  @Column()
  @IsNotEmpty()
  @IsString()
  price: string;
  
  @Column({default :false})
  is_required: boolean;
  
  @Column({default :true})
  status: boolean;
  
  @CreateDateColumn() createdAt :Date;
  @UpdateDateColumn() updatedAt :Date;

}
