import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcryt from "bcrypt";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>, 
    private jwService: JwtService) { }

  async validateUser(createUserDto: CreateUserDto): Promise<any> {
    const user = await this.userRepository.findOne({ email: createUserDto.email });
    if (!user) {
          throw new BadRequestException("Kullanici bulunamadi");
    }
    const passwordValid = bcryt.compareSync(createUserDto.password,user.password);
    if (!passwordValid){
      throw new BadRequestException("Hatali Sifre");
    }
    const jwt = await this.jwService.signAsync({ roles: "Admin",  id : user.id, email: user.email},{expiresIn : "60h"});
    return jwt; 
  }

  async validToken(token: string): Promise<any> {
    try {
      if (!token) {
        throw new UnauthorizedException("Token invalid");
      }
      const valid: Promise<any> = await this.jwService.verifyAsync(token);
      return valid;
    } catch (error) {
      throw new UnauthorizedException("Token invalid");
    }
    
  }

}
