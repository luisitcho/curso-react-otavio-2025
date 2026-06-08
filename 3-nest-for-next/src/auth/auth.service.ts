import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    doLogin(loginDto: LoginDto) {
        console.log('Login AuthService', loginDto);
        return loginDto;
    }
}
