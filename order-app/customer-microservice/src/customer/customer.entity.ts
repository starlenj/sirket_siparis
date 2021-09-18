import { IsEmail, IsNotEmpty, isPhoneNumber, IsString } from "class-validator";
import { BaseEntity, Column, CreateDateColumn, Entity, ObjectIdColumn, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Customer {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  name: string;
  
  @Column({unique :true})
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Column()
  @IsNotEmpty()
  phone: string;
  
  @Column({default :true})
  status: boolean;
  
  @CreateDateColumn() createdAt :Date;
  @UpdateDateColumn() updatedAt :Date;

}
