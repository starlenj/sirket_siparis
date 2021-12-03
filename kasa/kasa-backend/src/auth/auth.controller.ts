import { Body, Controller, Options, Post, UseFilters } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
 constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() UserCreateDto: CreateUserDto ) {
    console.log(UserCreateDto)
    const jwt = this.authService.validateUser(UserCreateDto);
    return jwt; 
  }

  @Post("validToken")
  validToken(@Body() body: any) {
    console.log(body.token)
    const valid = this.authService.validToken(body.token);
    return valid;
  }
}
