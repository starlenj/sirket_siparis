import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";
import {  Column, CreateDateColumn, Entity,  PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Sube {
  
  @PrimaryGeneratedColumn()
  id: number;


  @Column()
  @IsNotEmpty()
  @IsEmail()
  name: string;
  
  @Column({default :true})
  status: boolean;
  
  @CreateDateColumn() createdAt :Date;
  @UpdateDateColumn() updatedAt :Date;

}
