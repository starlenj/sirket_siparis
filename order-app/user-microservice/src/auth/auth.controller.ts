import { Body, Controller, Post } from '@nestjs/common';
import { UserJWTDto } from 'src/dto/user-jwt.dto';
import { UserLoginDTO } from 'src/dto/user-login.dto';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
	constructor(private userService :UserService,private authService:AuthService){}
	@Post("Login")
	async Login(@Body() loginUser:UserLoginDTO ) {
    const validUser  = 	await	this.userService.validateUser(loginUser)	
		const correctUser :UserJWTDto = new UserJWTDto();
		correctUser.email =validUser.email
	 return this.authService.generateJWT(validUser);
	}

}
