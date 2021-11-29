import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
 constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() UserCreateDto: CreateUserDto ) {
    const jwt = this.authService.validateUser(UserCreateDto);
    return jwt; 
  }
}
