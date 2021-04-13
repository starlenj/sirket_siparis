import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Observable, of } from 'rxjs';
import { UserLoginDTO } from 'src/dto/user-login.dto';
import { Repository } from 'typeorm';
import { User } from './user.entity';
const bcrypt = require('bcrypt');
@Injectable()
export class UserService extends TypeOrmCrudService<User>{
    constructor(@InjectRepository(User) repo :Repository<User>){
        super(repo);
    }
   async validateUser(loginUser:UserLoginDTO) {
     const user =await  this.repo.findOne({email:loginUser.email})
      if(user){
        const isValid = await bcrypt.compare(loginUser.password,user.password)
        if(isValid){
          return user;
      }else {
      return {
        error : "Invalid password"
        }
      }
    }else {
    return {
      error  :"User Not Found"
      }
    }
  }
}
