import { IsEmail } from "class-validator";
import { OrderBaseEntity } from "src/base/base.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends OrderBaseEntity  {

 @PrimaryGeneratedColumn()
 id: number;

 @Column()
 @IsEmail()
 email: string;

 @Column()
 password: string;

 @Column()
 sube_id: number;

 @Column()
 rolesId: number;

 @Column({default : 1})
 status : number;


}
