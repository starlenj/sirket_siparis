import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import  * as bcrypt  from "bcrypt";
@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepository : Repository<User>) {}

  async create(createUserDto: CreateUserDto) {
    const hash = await bcrypt.hash(createUserDto.password, 10);
    createUserDto.password = hash;
    const newUser =  this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  async findAll() {
    return  this.userRepository.find();
  }

  async findOne(id: number) {
    return this.userRepository.findOne(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne(id);
    user.email = updateUserDto.email;
    user.sube_id = updateUserDto.sube_id;
    const hash = await bcrypt.hash(updateUserDto.password, 10);
    user.password = hash;
    return await this.userRepository.save(user);
  }

  async remove(id: number) {
    const user = await this.userRepository.findOne(id);
    user.status = 0;
    return await this.userRepository.save(user);
  }
}
