import { IsEmail, IsNotEmpty, isPhoneNumber, IsString } from "class-validator";
import { BaseEntity, Column, CreateDateColumn, Entity, ObjectIdColumn, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class CustomerAddress {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  name: string;
  
  @Column()
  @IsNotEmpty()
  @IsEmail()
  town: string;

  @Column()
  @IsNotEmpty()
  city: string;
  
  @Column()
  @IsNotEmpty()
  address: string;
  
  @Column()
  @IsNotEmpty()
  customer_id: number;
  
  @Column({default :true})
  status: boolean;
  
  @CreateDateColumn() createdAt :Date;
  @UpdateDateColumn() updatedAt :Date;

}
